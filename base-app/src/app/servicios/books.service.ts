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
      'Goris avanzados con Maese Cocaín'
    ];
  }

  getLibros(clave: string) {
    return this.aLibros;
  }

}
