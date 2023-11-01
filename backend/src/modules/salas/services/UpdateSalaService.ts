import { getCustomRepository } from 'typeorm';
import Sala from '../typeorm/entities/Sala';
import SalaRepository from '../typeorm/repositories/SalaRepository';
import AppError from '@shared/errors/AppError';
import { IRequest } from '../interfaces/UpdateSalaInterface';

class UpdateSalaService {
  public async execute({ id, numeroSala, capacidade }: IRequest): Promise<Sala> {
    const salaRepository = getCustomRepository(SalaRepository);

    const sala = await salaRepository.findOne(id);

    if (!sala) {
      throw new AppError('Sala não encontrada.');
    }

    const salaWithSameNumero = await salaRepository.findByNumeroSala(numeroSala);

    if (salaWithSameNumero) {
      throw new AppError('Número de sala já utilizado por outra sala.');
    }

    sala.numeroSala = numeroSala;
    sala.capacidade = capacidade;

    await salaRepository.save(sala);

    return sala;
  }
}

export default UpdateSalaService;
