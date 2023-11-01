import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import IngressoRepository from '../typeorm/repositories/IngressoRepository';
import { IRequest } from '../interfaces/DeleteIngressoInterface';


class DeleteIngressoService {
  public async execute(id: IRequest): Promise<void> {
    const ingressoRepository = getCustomRepository(IngressoRepository);

    const ingresso = await ingressoRepository.findOne(id);

    if (!ingresso) {
      throw new AppError('Ingresso não encontrada.');
    }

    await ingressoRepository.remove(ingresso);
  }
}
export default DeleteIngressoService;
