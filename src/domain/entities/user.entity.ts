import { userWithoutPassword } from './userWithoutPassword.entity';

export class User extends userWithoutPassword {
  password: string;
}
