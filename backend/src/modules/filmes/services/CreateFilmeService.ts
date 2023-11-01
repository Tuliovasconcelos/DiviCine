import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Filme from '../typeorm/entities/Filme';
import FilmeRepository from '../typeorm/repositories/FilmeRepository';
import { IRequest } from '../interfaces/CreateFilmeInterface';

class CreateFilmeService {

  public async execute({
    titulo,
    genero,
    diretor,
    duracao,
    classificacao
  }: IRequest): Promise<Filme> {

    const FilmesRepository = getCustomRepository(FilmeRepository);

    const tituloExists = await FilmesRepository.findByTitulo(titulo);

    if (tituloExists) {
      throw new AppError('Título já utilizado.');
    }

    const Filme = FilmesRepository.create({
      titulo,
      genero,
      diretor,
      duracao,
      classificacao
    });

    await FilmesRepository.save(Filme);

    return Filme;
  }
}

export default CreateFilmeService;
