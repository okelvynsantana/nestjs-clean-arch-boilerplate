import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { AppService } from './services/app.service';
import { UseCasesProxyModule } from './usecases-proxy/usecases-proxy.module';

@Module({
  providers: [AppService],
  imports: [UseCasesProxyModule, ControllersModule],
})
export class MainModule {}
