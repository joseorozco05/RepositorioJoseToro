import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Avion } from './models/avion';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{

  createDb() {
    const aviones = [
      
    ];

    return {aviones};
  }

  genId(aviones: Avion[]): number {
    return aviones.length > 0 ? Math.max(...aviones.map(Avion => Avion.id)) + 1 : 11;
  }

}
