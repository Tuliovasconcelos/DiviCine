import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import FilmesController from '../controllers/FilmesController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const filmesRouter = Router();
const filmesController = new FilmesController();

filmesRouter.get('/', isAuthenticated, filmesController.index);

filmesRouter.get('/:id', isAuthenticated, filmesController.show);

filmesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      titulo: Joi.string().required(),
      genero: Joi.string().required(),
      diretor: Joi.string().required(),
      duracao: Joi.number().required(),
      classificacao: Joi.string().required(),
    },
  }),
  filmesController.create,
);

filmesRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      titulo: Joi.string().required(),
      genero: Joi.string().required(),
      diretor: Joi.string().required(),
      duracao: Joi.number().required(),
      classificacao: Joi.string().required(),
    },
  }),
  filmesController.update,
);

filmesRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  filmesController.delete,
);

export default filmesRouter;
