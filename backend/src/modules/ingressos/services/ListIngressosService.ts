import { getCustomRepository } from 'typeorm';
import Ingresso from '../typeorm/entities/Ingresso';
import IngressoRepository from '../typeorm/repositories/IngressoRepository';

class ListIngressosService {
  public async execute(): Promise<Ingresso[]> {

    const ingressoRepository = getCustomRepository(IngressoRepository);

    const ingresso = await ingressoRepository.find();

    return ingresso;
  }
}

export default ListIngressosService;
