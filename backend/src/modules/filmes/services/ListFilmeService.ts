import { getCustomRepository } from 'typeorm';
import Filme from '../typeorm/entities/Filme';
import FilmeRepository from '../typeorm/repositories/FilmeRepository';

class ListFilmesService {
  public async execute(): Promise<Filme[]> {

    const FilmesRepository = getCustomRepository(FilmeRepository);

    const filmes = await FilmesRepository.find();

    return filmes;
  }
}

export default ListFilmesService;
