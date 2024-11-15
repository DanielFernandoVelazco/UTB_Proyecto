import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    UNIVERSIDAD TECNOLOGICA DE BOLIVAR - UTB
    Proyecto Docker
    Grupo: 3

    Para ingresar a la interfaz swagger agrega en tu barra de navegacion "/api"
    Ejemplo: "http:// ..... /api"
    `;
  }
}
