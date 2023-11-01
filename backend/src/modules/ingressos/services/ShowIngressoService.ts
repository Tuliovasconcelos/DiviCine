import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Ingresso from '../typeorm/entities/Ingresso';
import IngressoRepository from '../typeorm/repositories/IngressoRepository';
import { IRequest } from '../interfaces/ShowIngressoInterface';


class ShowIngressoService {
  public async execute(id: IRequest): Promise<Ingresso | undefined> {

    const ingressoRepository = getCustomRepository(IngressoRepository);
    const ingresso = await ingressoRepository.findOne(id);

    if (!ingresso) {
      throw new AppError('Ingresso não encontrado.');
    }

    return ingresso;
  }
}
export default ShowIngressoService;
