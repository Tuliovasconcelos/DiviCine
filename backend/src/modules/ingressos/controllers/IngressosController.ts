import { Request, Response } from 'express';
import CreateIngressoService from '../services/CreateIngressoService';
import ListIngressosService from '../services/ListIngressosService';
import DeleteIngressoService from '../services/DeleteIngressoService';
import ShowIngressoService from '../services/ShowIngressoService';
import UpdateIngressoService from '../services/UpdateIngressoService';
import { instanceToInstance } from 'class-transformer';

export default class IngressosController {
  public async index(request: Request, response: Response): Promise<Response> {

    const listIngressos = new ListIngressosService();

    const ingressos = await listIngressos.execute();

    return response.json(instanceToInstance(ingressos));

  }

  public async create(request: Request, response: Response): Promise<Response> {

    const {
      idSessao,
      preco,
      estado
    } = request.body;

    const createIngresso = new CreateIngressoService();

    const ingressos = await createIngresso.execute({
      idSessao,
      preco,
      estado
    });

    return response.json(instanceToInstance(ingressos));

  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const showIngresso = new ShowIngressoService();

    const ingressos = await showIngresso.execute({ id: Number(id) });

    return response.json(instanceToInstance(ingressos));

  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const deleteIngresso = new DeleteIngressoService();

    await deleteIngresso.execute({ id: Number(id) });

    return response.status(204).send();

  }

  public async update(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const {
      idSessao,
      preco,
      estado
    } = request.body;

    const updateIngresso = new UpdateIngressoService();

    const ingresso = await updateIngresso.execute(Number(id),
      {
        idSessao,
        preco,
        estado
      }
    );

    return response.json(instanceToInstance(ingresso));
  }
}
