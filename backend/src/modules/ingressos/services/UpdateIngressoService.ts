import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Ingresso from '../typeorm/entities/Ingresso';
import IngressoRepository from '../typeorm/repositories/IngressoRepository';
import { IRequest } from '../interfaces/UpdateIngressoInterface';

class UpdateIngressoService {
  public async execute(id: number, {
    idSessao,
    cpf,
    preco,
    estado
  }: IRequest): Promise<Ingresso> {
    const ingressoRepository = getCustomRepository(IngressoRepository);

    const ingresso = await ingressoRepository.findOne(id);

    if (!ingresso) {
      throw new AppError('Ingresso não encontrado.');
    }

    ingresso.idSessao = idSessao;
    ingresso.cpf = cpf;
    ingresso.preco = preco;
    ingresso.estado = estado;

    await ingressoRepository.save(ingresso);

    return ingresso;
  }
}

export default UpdateIngressoService;
