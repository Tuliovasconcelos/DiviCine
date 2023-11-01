import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Filme from '../typeorm/entities/Filme';
import FilmeRepository from '../typeorm/repositories/FilmeRepository';
import { IRequest } from '../interfaces/ShowFilmeInterface';


class ShowFilmeService {
  public async execute(id: IRequest): Promise<Filme | undefined> {

    const FilmesRepository = getCustomRepository(FilmeRepository);
    const filme = await FilmesRepository.findOne(id);

    if (!filme) {
      throw new AppError('Filme não encontrado.');
    }

    return filme;
  }
}
export default ShowFilmeService;
