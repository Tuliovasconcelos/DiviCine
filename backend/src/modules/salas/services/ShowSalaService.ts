import { getCustomRepository } from 'typeorm';
import Sala from '../typeorm/entities/Sala';
import SalaRepository from '../typeorm/repositories/SalaRepository';
import AppError from '@shared/errors/AppError';
import { IRequest } from '../interfaces/ShowSalaInterface';

class ShowSalaService {
  public async execute({ id }: IRequest): Promise<Sala | undefined> {
    const salaRepository = getCustomRepository(SalaRepository);

    const sala = await salaRepository.findOne(id);

    if (!sala) {
      throw new AppError('Sala não encontrada.');
    }

    return sala;
  }
}

export default ShowSalaService;
