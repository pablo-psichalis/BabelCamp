import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../servicios/google-books.service';

@Component({
  selector: 'bbl-libros-by-service',
  templateUrl: './libros-by-service.component.html',
  styleUrls: ['./libros-by-service.component.css']
})
export class LibrosByServiceComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;

  constructor(public gbook: GoogleBooksService) {
  }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    /* this.gbook.getLibros(this.clave).then(); */
    this.gbook.getLibros(this.clave)
    .then( (response: any) => this.aLibros = response );
  }
}
