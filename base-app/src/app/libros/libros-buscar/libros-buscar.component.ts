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
    const url = this.urielBase + this.clave;
    this.httpClient.get(url).toPromise()
      .then(
        (response: any) => console.log(response)
      )
      .catch((error) => console.log(error));


    this.clave = '';
  }

  /*   buscarAsync() {
      this.booksService.getLibrosAsync(this.clave)
        .then((response: any) => this.aLibros = response);
    } */

}
