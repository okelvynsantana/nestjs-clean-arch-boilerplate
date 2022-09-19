import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';
import { UseCasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [UseCasesProxyModule.register(), ServicesModule],
  controllers: [UserController, AppController],
})
export class ControllersModule {}
