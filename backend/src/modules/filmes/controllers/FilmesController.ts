import { Request, Response } from 'express';
import CreateFilmeService from '../services/CreateFilmeService';
import ListFilmeService from '../services/ListFilmeService';
import DeleteFilmeService from '../services/DeleteFilmeService';
import ShowFilmeService from '../services/ShowFilmeService';
import UpdateFilmeService from '../services/UpdateFilmeService';
import { instanceToInstance } from 'class-transformer';

export default class FilmesController {
  public async index(request: Request, response: Response): Promise<Response> {

    const listFilmes = new ListFilmeService();

    const filmes = await listFilmes.execute();

    return response.json(instanceToInstance(filmes));

  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { titulo, genero, diretor, duracao, classificacao } = request.body;

    const createFilme = new CreateFilmeService();

    const filme = await createFilme.execute({ titulo, genero, diretor, duracao, classificacao });

    return response.json(instanceToInstance(filme));

  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const showFilme = new ShowFilmeService();

    const filme = await showFilme.execute({ id: Number(id) });

    return response.json(instanceToInstance(filme));

  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const deleteFilme = new DeleteFilmeService();

    await deleteFilme.execute({ id: Number(id) });

    return response.status(204).send();

  }

  public async update(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const { titulo, genero, diretor, duracao, classificacao } = request.body;

    const updateFilme = new UpdateFilmeService();

    const filme = await updateFilme.execute(Number(id), {
      titulo,
      genero,
      diretor,
      duracao,
      classificacao,
    });

    return response.json(instanceToInstance(filme));
  }
}
