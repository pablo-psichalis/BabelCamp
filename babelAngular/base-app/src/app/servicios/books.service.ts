import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Tales of Gasconia II',
      'AppleWatch dev con Dr Leori',
      'Hangular para catedráticos',
      'FrenteEnd avanzadísimo con Don Alopecio Cálvez',
      'Doors ninja con Maese Cocaín'
    ];
  }

  getLibros(clave: string) {
    return this.aLibros;
  }

  getLibrosAsync(clave: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve(this.aLibros);
        } else {
          reject('Esto es un error');
        }
      }, 1500);
    });
  }

}
