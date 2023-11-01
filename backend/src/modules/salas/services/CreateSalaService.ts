import { getCustomRepository } from 'typeorm';
import Sala from '../typeorm/entities/Sala';
import SalaRepository from '../typeorm/repositories/SalaRepository';
import AppError from '@shared/errors/AppError';
import { IRequest } from '../interfaces/CreateSalaInterface';

class CreateSalaService {

  public async execute({ numeroSala, capacidade }: IRequest): Promise<Sala> {

    const salaRepository = getCustomRepository(SalaRepository);

    const salaExists = await salaRepository.findByNumeroSala(numeroSala);

    if (salaExists) {
      throw new AppError('Número de sala já utilizado.');
    }

    const sala = salaRepository.create({ numeroSala, capacidade });

    await salaRepository.save(sala);

    return sala;
  }
}

export default CreateSalaService;
