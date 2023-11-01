import { EntityRepository, Repository } from 'typeorm';
import Filme from '../entities/Filme';

@EntityRepository(Filme)
class FilmeRepository extends Repository<Filme> {
  async findByTitulo(titulo: string): Promise<Filme[]> {
    return this.find({ where: { titulo: titulo } });
  }

}

export default FilmeRepository;
