import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../../../application/usecases/createUser.usecase';
import { CreateUserDto } from '../../../../../domain/dtos/createUser.dto';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UseCasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';

@Controller('/users')
export class UserController {
  constructor(
    @Inject(UseCasesProxyModule.CREATEUSER_USECASE_PROXY)
    private createUserUseCaseProxy: UseCaseProxy<CreateUserUseCase>,
  ) {}

  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return await this.createUserUseCaseProxy.getInstance().execute(data);
  }
}
