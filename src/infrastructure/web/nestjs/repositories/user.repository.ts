import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../../domain/dtos/createUser.dto';
import { User } from '../../../../domain/entities/user.entity';
import { IUserRepository } from '../../../../domain/repositories/IUserRepository.interface';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class UserRepository implements IUserRepository {
  /**
   *
   */
  constructor(private prismaService: PrismaService) {}

  async createUser(userData: CreateUserDto): Promise<User> {
    return await this.prismaService.user.create({
      data: userData,
    });
  }
  async getByEmail(email: string): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }
}
