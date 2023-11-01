import { Request, Response } from 'express';
import CreateSalaService from '../services/CreateSalaService';
import ListSalasService from '../services/ListSalasService';
import DeleteSalaService from '../services/DeleteSalaService';
import ShowSalaService from '../services/ShowSalaService';
import UpdateSalaService from '../services/UpdateSalaService';
import { instanceToInstance } from 'class-transformer';

export default class SalasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSalas = new ListSalasService();

    const salas = await listSalas.execute();

    return response.json(instanceToInstance(salas));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { numeroSala, capacidade } = request.body;

    const createSala = new CreateSalaService();

    const sala = await createSala.execute({ numeroSala, capacidade });

    return response.json(instanceToInstance(sala));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showSala = new ShowSalaService();

    const sala = await showSala.execute({ id: Number(id) });

    return response.json(instanceToInstance(sala));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSala = new DeleteSalaService();

    await deleteSala.execute({ id: Number(id) });

    return response.status(204).send();
  }

  public async update(request: Request, response: Response): Promise<Response> {

    const id = Number(request.params.id);
    const numeroSala = Number(request.params.numeroSala);
    const capacidade = Number(request.params.capacidade);

    const updateSala = new UpdateSalaService();

    const sala = await updateSala.execute({ id, numeroSala, capacidade });

    return response.json(instanceToInstance(sala));
  }
}
