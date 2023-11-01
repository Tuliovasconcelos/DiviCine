import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import SalasController from '../controllers/SalasController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const salasRouter = Router();
const salasController = new SalasController();

salasRouter.get('/', isAuthenticated, salasController.index);

salasRouter.get('/:id', isAuthenticated, salasController.show);

salasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      numeroSala: Joi.number().required(),
      capacidade: Joi.number().required(),
    },
  }),
  salasController.create,
);

salasRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      numeroSala: Joi.number().required(),
      capacidade: Joi.number().required(),
    },
  }),
  salasController.update,
);

salasRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  salasController.delete,
);

export default salasRouter;
