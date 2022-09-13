import { NestFactory } from '@nestjs/core';
import { PrismaService } from './infrastructure/database/prisma/prisma.service';
import { MainModule } from './infrastructure/web/nestjs/main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
