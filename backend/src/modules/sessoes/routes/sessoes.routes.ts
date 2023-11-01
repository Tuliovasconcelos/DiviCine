import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import SessoesController from '../controllers/SessoesController';

const sessoesRouter = Router();
const sessoesController = new SessoesController();

sessoesRouter.get('/', isAuthenticated, sessoesController.index);

sessoesRouter.get('/:id', isAuthenticated, sessoesController.show);

sessoesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      idFilme: Joi.number().required(),
      idSala: Joi.number().required(),
      dataHora: Joi.date().required()
    },
  }),
  sessoesController.create,
);

sessoesRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      idFilme: Joi.number().required(),
      idSala: Joi.number().required(),
      dataHora: Joi.date().required()
    },
  }),
  sessoesController.update,
);

sessoesRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  sessoesController.delete,
);

export default sessoesRouter;
