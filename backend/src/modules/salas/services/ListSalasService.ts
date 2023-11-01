import { getCustomRepository } from 'typeorm';
import Sala from '../typeorm/entities/Sala';
import SalaRepository from '../typeorm/repositories/SalaRepository';

class ListSalasService {
  public async execute(): Promise<Sala[]> {
    const salaRepository = getCustomRepository(SalaRepository);

    const salas = await salaRepository.find();

    return salas;
  }
}

export default ListSalasService;
