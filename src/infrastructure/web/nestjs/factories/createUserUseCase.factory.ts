import { CreateUserUseCase } from '../../../../application/usecases/createUser.usecase';
import { ExceptionsService } from '../exceptions/exceptions.service';
import { UserRepository } from '../repositories/user.repository';
import { UseCaseProxy } from '../usecases-proxy/usecases-proxy';

export function CreateUserUseCaseFactory(
  userRepository: UserRepository,
  errorHandler: ExceptionsService,
) {
  return new UseCaseProxy(new CreateUserUseCase(userRepository, errorHandler));
}
