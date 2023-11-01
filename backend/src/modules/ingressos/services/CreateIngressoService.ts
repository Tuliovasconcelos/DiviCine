import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Ingresso from '../typeorm/entities/Ingresso';
import IngressoRepository from '../typeorm/repositories/IngressoRepository';
import { IRequest } from '../interfaces/CreateIngressoInterface';

class CreateIngressoService {

  public async execute({
    idSessao,
    cpf,
    preco,
    estado
  }: IRequest): Promise<Ingresso> {

    const ingressoRepository = getCustomRepository(IngressoRepository);

    const ingresso = ingressoRepository.create({
      idSessao,
      cpf,
      preco,
      estado
    });

    await ingressoRepository.save(ingresso);

    return ingresso;
  }
}

export default CreateIngressoService;
