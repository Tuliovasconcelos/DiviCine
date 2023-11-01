import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Sessao from '../typeorm/entities/Sessao';
import SessaoRepository from '../typeorm/repositories/SessaoRepository';
import { IRequest } from '../interfaces/UpdateSessaoInterface';

class UpdateSessaoService {
  public async execute(id: number, {
    idFilme,
    idSala,
    dataHora
  }: IRequest): Promise<Sessao> {
    const sessoesRepository = getCustomRepository(SessaoRepository);

    const sessao = await sessoesRepository.findOne(id);

    if (!sessao) {
      throw new AppError('Sessão não encontrada.');
    }

    sessao.idFilme = idFilme;
    sessao.idSala = idSala;
    sessao.dataHora = dataHora;

    await sessoesRepository.save(sessao);

    return sessao;
  }
}

export default UpdateSessaoService;
