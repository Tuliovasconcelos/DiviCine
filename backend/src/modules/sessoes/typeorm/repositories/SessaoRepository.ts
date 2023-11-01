import { EntityRepository, Repository } from 'typeorm';
import Sessao from '../entities/Sessao';

@EntityRepository(Sessao)
class SessaoRepository extends Repository<Sessao> {
  async findSessaoById(id: number): Promise<Sessao | undefined> {
    return this.findOne(id);
  }

  async findSessaoByFilmeId(idFilme: number): Promise<Sessao | undefined> {
    return this.findOne(idFilme);
  }

  async findSessaoBySalaId(idSala: number): Promise<Sessao | undefined> {
    return this.findOne(idSala);
  }
}

export default SessaoRepository;
