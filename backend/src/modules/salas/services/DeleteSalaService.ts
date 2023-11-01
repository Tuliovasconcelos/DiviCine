import { getCustomRepository } from 'typeorm';
import SalaRepository from '../typeorm/repositories/SalaRepository';
import AppError from '@shared/errors/AppError';
import { IRequest } from '../interfaces/DeleteSalaInterface'

class DeleteSalaService {
  public async execute({ id }: IRequest): Promise<void> {
    const salaRepository = getCustomRepository(SalaRepository);

    const sala = await salaRepository.findOne(id);

    if (!sala) {
      throw new AppError('Sala não encontrada.');
    }

    await salaRepository.remove(sala);
  }
}

export default DeleteSalaService;
