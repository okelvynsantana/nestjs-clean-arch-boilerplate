import { DynamicModule, Module } from '@nestjs/common';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { ExceptionsService } from '../exceptions/exceptions.service';
import { CreateUserUseCaseFactory } from '../factories/createUserUseCase.factory';
import { RepositoriesModule } from '../repositories/repositories.module';
import { UserRepository } from '../repositories/user.repository';

@Module({
  imports: [RepositoriesModule, ExceptionsModule],
})
export class UseCasesProxyModule {
  static CREATEUSER_USECASE_PROXY = 'CreateUserUseCaseProxy';
  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      providers: [
        {
          inject: [UserRepository, ExceptionsService],

          provide: UseCasesProxyModule.CREATEUSER_USECASE_PROXY,
          useFactory: CreateUserUseCaseFactory,
        },
      ],
      exports: [UseCasesProxyModule.CREATEUSER_USECASE_PROXY],
    };
  }
}
