import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Sessao from '../typeorm/entities/Sessao';
import SessaoRepository from '../typeorm/repositories/SessaoRepository';
import { IRequest } from '../interfaces/ShowSessaoInterface';


class ShowSessaoService {
  public async execute(id: IRequest): Promise<Sessao | undefined> {

    const sessoesRepository = getCustomRepository(SessaoRepository);
    const sessao = await sessoesRepository.findOne(id);

    if (!sessao) {
      throw new AppError('Sessão não encontrada.');
    }

    return sessao;
  }
}
export default ShowSessaoService;
