import { CreateUserDto } from '../dtos/createUser.dto';
import { User } from '../entities/user.entity';

export interface IUserRepository {
  getByEmail(email: string): Promise<User>;
  createUser(userData: CreateUserDto): Promise<User>;
}
