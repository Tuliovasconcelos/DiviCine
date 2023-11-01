import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import SessaoRepository from '../typeorm/repositories/SessaoRepository';
import { IRequest } from '../interfaces/DeleteSessaoInterface';


class DeleteSessaoService {
  public async execute(id: IRequest): Promise<void> {
    const sessoesRepository = getCustomRepository(SessaoRepository);

    const sessao = await sessoesRepository.findOne(id);

    if (!sessao) {
      throw new AppError('Sessão não encontrada.');
    }

    await sessoesRepository.remove(sessao);
  }
}
export default DeleteSessaoService;
