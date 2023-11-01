import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Sessao from '../typeorm/entities/Sessao';
import SessaoRepository from '../typeorm/repositories/SessaoRepository';
import { IRequest } from '../interfaces/CreateSessaoInterface';

class CreateSessaoService {

  public async execute({
    idFilme,
    idSala,
    dataHora
  }: IRequest): Promise<Sessao> {

    const sessoesRepository = getCustomRepository(SessaoRepository);

    const sessaoFilmeExists = await sessoesRepository.findSessaoByFilmeId(idFilme);
    const sessaoSalaExists = await sessoesRepository.findSessaoBySalaId(idSala);

    if (sessaoFilmeExists && sessaoSalaExists) {
      throw new AppError('Sessão já cadastrada.');
    }

    const sessao = sessoesRepository.create({
      idFilme,
      idSala,
      dataHora
    });

    await sessoesRepository.save(sessao);

    return sessao;
  }
}

export default CreateSessaoService;
