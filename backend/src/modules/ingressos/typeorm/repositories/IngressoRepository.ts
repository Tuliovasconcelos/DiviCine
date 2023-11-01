import { EntityRepository, Repository } from 'typeorm';
import Ingresso from '../entities/Ingresso';

@EntityRepository(Ingresso)
class IngressoRepository extends Repository<Ingresso> {

  async findIngressosByEstado(estado: string): Promise<Ingresso[]> {
    return this.find({ where: { estado } });
  }

  async findIngressoById(id: number): Promise<Ingresso | undefined> {
    return this.findOne(id);
  }

}

export default IngressoRepository;
