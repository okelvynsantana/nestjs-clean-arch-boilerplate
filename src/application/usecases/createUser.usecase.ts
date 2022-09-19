import { CreateUserDto } from '../../domain/dtos/createUser.dto';
import { userWithoutPassword } from '../../domain/entities/userWithoutPassword.entity';
import { IException } from '../../domain/exceptions/exceptions.inteface';
import { IUserRepository } from '../../domain/repositories/IUserRepository.interface';

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly errorHandler: IException,
  ) {}

  public async execute(data: CreateUserDto): Promise<userWithoutPassword> {
    const user = await this.userRepository.getByEmail(data.email);

    if (user)
      this.errorHandler.badRequestException({
        message: 'User already exist.',
        code_error: 400,
      });

    const newUser = await this.userRepository.createUser(data);

    return newUser;
  }
}
