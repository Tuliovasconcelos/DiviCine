import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import filmesRouter from '@modules/filmes/routes/filmes.routes';
import salasRouter from '@modules/salas/routes/salas.routes';
import ingressosRouter from '@modules/ingressos/routes/ingressos.routes';
import sessoesRouter from '@modules/sessoes/routes/sessoes.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/filmes', filmesRouter);
routes.use('/sessoes', sessoesRouter);
routes.use('/salas', salasRouter);
routes.use('/ingressos', ingressosRouter);



export default routes;
