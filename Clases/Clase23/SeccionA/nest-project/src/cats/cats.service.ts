import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';

@Injectable()
export class CatsService {
  //creamos un arreglo de gatos
  private readonly cats: Array<Cat> = [];

  //metodo para crear los gatos
  create(cat: Cat) {
    this.cats.push(cat);
  }

  //metodo para leer todos los gatos
  getAll(): Cat[] {
    return this.cats;
  }
}
