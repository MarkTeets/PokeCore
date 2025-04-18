import express, { Request, Response } from 'express';
import userController from '../controllers/userController';
const userRouter = express.Router();

const data = {
  message: 'Connection to backend successful!'
};

userRouter.get('/', (req: Request, res: Response) => {
  // console.log(data);
  res.status(200).json(data);
});

userRouter.get('/get-userList', userController.getUserList, (req: Request, res: Response) => {
  res.status(200).json(res.locals.frontendData);
});

export default userRouter;
