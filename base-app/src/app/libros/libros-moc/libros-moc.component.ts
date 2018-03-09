import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../servicios/books.service';

@Component({
  selector: 'bbl-libros-moc',
  templateUrl: './libros-moc.component.html',
  styleUrls: ['./libros-moc.component.css']
})
export class LibrosMocComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;

  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = this.booksService.getLibros(this.clave);
    this.clave = '';
  }

  buscarAsync() {
    this.booksService.getLibrosAsync(this.clave)
      .then((response: any) => this.aLibros = response);
  }

}
