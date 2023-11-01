import { Request, Response } from 'express';
import CreateSessaoService from '../services/CreateSessaoService';
import ListSessoesService from '../services/ListSessoesService';
import DeleteSessaoService from '../services/DeleteSessaoService';
import ShowSessaoService from '../services/ShowSessaoService';
import UpdateSessaoService from '../services/UpdateSessaoService';
import { instanceToInstance } from 'class-transformer';

export default class SessoesController {
  public async index(request: Request, response: Response): Promise<Response> {

    const listSessoes = new ListSessoesService();

    const sessoes = await listSessoes.execute();

    return response.json(instanceToInstance(sessoes));

  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { idFilme, idSala, dataHora } = request.body;

    const createSessao = new CreateSessaoService();

    const sessao = await createSessao.execute({ idFilme, idSala, dataHora });

    return response.json(instanceToInstance(sessao));

  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const showSessao = new ShowSessaoService();

    const sessao = await showSessao.execute({ id: Number(id) });

    return response.json(instanceToInstance(sessao));

  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const deleteSessao = new DeleteSessaoService();

    await deleteSessao.execute({ id: Number(id) });

    return response.status(204).send();

  }

  public async update(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const { idFilme, idSala, dataHora } = request.body;

    const updateSessao = new UpdateSessaoService();

    const sessao = await updateSessao.execute(Number(id), {
      idFilme, idSala, dataHora
    });

    return response.json(instanceToInstance(sessao));
  }
}
