import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma/prisma.module';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule],
})
export class MainModule {}
