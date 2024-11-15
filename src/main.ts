import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middleware/logger.middleware';
import { ProductsSeed } from './seeds/products/products.seeds';
import { UsersSeed } from './seeds/users/users-seeds';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(loggerGlobal);

  const productsSeed = app.get(ProductsSeed);
  await productsSeed.seed();
  console.log('*** LA INSERCION DE PRODUCTOS FUE EXITOSA ***');

  const usersSeed = app.get(UsersSeed);
  await usersSeed.seed();
  console.log('*** LA INSERCION DE USUARIOS FUE EXITOSA ***');

  await app.listen(3000);
}
bootstrap();
