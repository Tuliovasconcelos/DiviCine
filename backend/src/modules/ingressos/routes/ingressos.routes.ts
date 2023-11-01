import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import IngressosController from '../controllers/IngressosController';

const ingressosRouter = Router();
const ingressosController = new IngressosController();

ingressosRouter.get('/', isAuthenticated, ingressosController.index);

ingressosRouter.get('/:id', isAuthenticated, ingressosController.show);

ingressosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      idSessao: Joi.number().required(),
      preco: Joi.number().required(),
      estado: Joi.string().required()
    },
  }),
  ingressosController.create,
);

ingressosRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      idSessao: Joi.number().required(),
      preco: Joi.number().required(),
      estado: Joi.string().required()
    },
  }),
  ingressosController.update,
);

ingressosRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  ingressosController.delete,
);

export default ingressosRouter;
