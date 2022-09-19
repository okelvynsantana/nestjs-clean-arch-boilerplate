import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../database/prisma/prisma.module';
import { UserRepository } from './user.repository';

@Module({
  providers: [UserRepository],
  exports: [UserRepository],
  imports: [PrismaModule],
})
export class RepositoriesModule {}
