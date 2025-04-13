import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import userRouter from './routes/userRouter';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Delivers the frontend
app.use(express.static(path.join(__dirname, '../../dist/')));

// Paths for testing the server
app.use('/api/user', userRouter);
app.get('/api', (req: Request, res: Response) => {
  res.send('hello world from express!');
});
app.get('/', (req: Request, res: Response) => {
  res.status(404).send('Nothing to see here!');
});

//Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
