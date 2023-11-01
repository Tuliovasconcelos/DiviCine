import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import FilmeRepository from '../typeorm/repositories/FilmeRepository';
import { IRequest } from '../interfaces/DeleteFilmeInterface';


class DeleteFilmeService {
  public async execute(id: IRequest): Promise<void> {
    const FilmesRepository = getCustomRepository(FilmeRepository);

    const filme = await FilmesRepository.findOne(id);

    if (!filme) {
      throw new AppError('Filme não encontrado.');
    }

    await FilmesRepository.remove(filme);
  }
}
export default DeleteFilmeService;
