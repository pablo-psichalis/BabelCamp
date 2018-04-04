import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bbl-libros-buscar',
  templateUrl: './libros-buscar.component.html',
  styleUrls: ['./libros-buscar.component.css']
})

export class LibrosBuscarComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;
  urielBase: string;

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.aLibros = [];
    this.urielBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  buscar() {
    this.aLibros = [];
    const url = this.urielBase + this.clave;
    this.httpClient.get(url).toPromise()
      .then(
        // Es "response.items" o "element.volumeInfo.title"
        // porque está sacado del JSON que retorna la API
        // https://www.googleapis.com/books/v1/volumes?q=intitle:"clave"
        (response: any) => {
          console.log(response.items);
          response.items.forEach(element => {
            this.aLibros.push(element.volumeInfo.title);
          });
        }
      )
      .catch((error) => console.log(error));

    this.clave = '';
  }


  buscarRx() {
    this.aLibros = [];
    const url = this.urielBase + this.clave;
    this.httpClient.get(url).subscribe(
      (response: any) => {
        console.log(response.items);
        response.items.forEach(element => {
          this.aLibros.push(element.volumeInfo.title);
        });
      }
    );

    this.clave = '';
  }


  /*   buscarAsync() {
      this.booksService.getLibrosAsync(this.clave)
        .then((response: any) => this.aLibros = response);
    } */

}
