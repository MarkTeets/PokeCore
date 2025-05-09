import express, { Request, Response } from 'express';
import pokeApiController from '../controllers/pokeApiController';
const pokeApiRouter = express.Router();

pokeApiRouter.post(
  '/getResourceByNameOrId',
  pokeApiController.checkEndpointBase,
  pokeApiController.createResourceEndpoint,
  pokeApiController.fetchPokeApiJsonData,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.frontendData);
  }
);

pokeApiRouter.post(
  '/getResourceList',
  pokeApiController.checkEndpointBase,
  pokeApiController.createResourceListEndpoint,
  pokeApiController.fetchPokeApiJsonData,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.frontendData);
  }
);

export default pokeApiRouter;
