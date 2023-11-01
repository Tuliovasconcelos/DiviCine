import { EntityRepository, Repository } from 'typeorm';
import Sala from '../entities/Sala'; // Certifique-se de importar a entidade correta

@EntityRepository(Sala)
class SalaRepository extends Repository<Sala> {
  async findByNumeroSala(numeroSala: number): Promise<Sala[]> {
    return this.find({ where: { numeroSala: numeroSala } });
  }
}

export default SalaRepository;
