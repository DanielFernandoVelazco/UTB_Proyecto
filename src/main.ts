import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middleware/logger.middleware';
import { ProductsSeed } from './seeds/products/products.seeds';
import { UsersSeed } from './seeds/users/users-seeds';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(loggerGlobal);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Universidad Tecnologica de Bolivar')
    .setDescription(
      `
      API:  - Backend: Nestjs
            - Interfaz: Swagger 
            - Base de Datos: Postgres 
            - Imagenes: Docker
            - Despliegue: AWS
        
      Authores: Grupo 3
        `
    )
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const documet = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documet);

  const productsSeed = app.get(ProductsSeed);
  await productsSeed.seed();
  console.log('*** LA INSERCION DE PRODUCTOS FUE EXITOSA ***');

  const usersSeed = app.get(UsersSeed);
  await usersSeed.seed();
  console.log('*** LA INSERCION DE USUARIOS FUE EXITOSA ***');

  await app.listen(3000);
}
bootstrap();
