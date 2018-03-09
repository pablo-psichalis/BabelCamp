import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';

@Injectable()
export class GoogleBooksService {

  clave: string;
  aLibros: Array<string>;
  urielBase: string;

  constructor(public httpClient: HttpClient) {
    this.aLibros = [];
    this.urielBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  getLibros(clave: string) {
    // búsqueda real
    this.aLibros = [];
    const url = this.urielBase + this.clave;

    return this.httpClient.get(url).toPromise()
      .then(
        (response: any) => {
          response.items.forEach(element => {
            this.aLibros.push(element.volumeInfo.title);
          });
          return new Promise((resolve, reject) => {
            resolve(this.aLibros);
          });
        }
      )
      .catch((error) => console.log(error));
  }

  getLibrosBasic(clave: string) {
    this.aLibros = [];
    const url = this.urielBase + this.clave;
    return this.httpClient.get(url).toPromise();
  }

}
