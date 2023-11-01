import { getCustomRepository } from 'typeorm';
import Sessao from '../typeorm/entities/Sessao';
import SessaoRepository from '../typeorm/repositories/SessaoRepository';

class ListSessoesService {
  public async execute(): Promise<Sessao[]> {

    const sessaoRepository = getCustomRepository(SessaoRepository);

    const sessoes = await sessaoRepository.find();

    return sessoes;
  }
}

export default ListSessoesService;
