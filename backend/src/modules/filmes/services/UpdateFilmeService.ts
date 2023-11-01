import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Filme from '../typeorm/entities/Filme';
import FilmeRepository from '../typeorm/repositories/FilmeRepository';
import { IRequest } from '../interfaces/CreateFilmeInterface';

class UpdateFilmeService {
  public async execute(id: number, {
    titulo,
    genero,
    diretor,
    duracao,
    classificacao,
  }: IRequest): Promise<Filme> {
    const FilmesRepository = getCustomRepository(FilmeRepository);

    const filme = await FilmesRepository.findOne(id);

    if (!filme) {
      throw new AppError('Filme não encontrado.');
    }

    const tituloExists = await FilmesRepository.findByTitulo(titulo);

    if (tituloExists) {
      throw new AppError('Título já utilizado.');
    }

    // Atualize as propriedades do filme com os novos valores
    filme.titulo = titulo;
    filme.genero = genero;
    filme.diretor = diretor;
    filme.duracao = duracao;
    filme.classificacao = classificacao;

    await FilmesRepository.save(filme);

    return filme;
  }
}

export default UpdateFilmeService;
