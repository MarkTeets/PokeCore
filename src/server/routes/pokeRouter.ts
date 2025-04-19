import express, { Request, Response } from 'express';
import pokeController from '../controllers/pokeController';
const pokeRouter = express.Router();

pokeRouter.get('/png/:param1', pokeController.pngFetch, (req: Request, res: Response) => {
  res.status(200).sendFile(res.locals.frontendData.localCachePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).end();
    }
  });
});

pokeRouter.get('/png/:param1/:param2', pokeController.pngFetch, (req: Request, res: Response) => {
  res.status(200).sendFile(res.locals.frontendData.localCachePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).end();
    }
  });
});

pokeRouter.get(
  '/png/:param1/:param2/:param3',
  pokeController.pngFetch,
  (req: Request, res: Response) => {
    res.status(200).sendFile(res.locals.frontendData.localCachePath, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).end();
      }
    });
  }
);

pokeRouter.get('/:param1', pokeController.pokeFetch, (req: Request, res: Response) => {
  res.status(200).json(res.locals.frontendData);
});

pokeRouter.get('/:param1/:param2', pokeController.pokeFetch, (req: Request, res: Response) => {
  res.status(200).json(res.locals.frontendData);
});

pokeRouter.get(
  '/:param1/:param2/:param3',
  pokeController.pokeFetch,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.frontendData);
  }
);

export default pokeRouter;
