import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { IRequest } from '../interfaces/DeleteUserInterface';


class DeleteUserService {
  public async execute({ user_id }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    await usersRepository.remove(user);
  }
}

export default DeleteUserService;
