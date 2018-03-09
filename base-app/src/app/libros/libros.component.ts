import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-libros',
  template: `
      <div class="container">
      <div class="row">
        <bbl-libros-moc class="col-6"></bbl-libros-moc>
        <bbl-libros-buscar class="col-6"></bbl-libros-buscar>
        <bbl-libros-by-service class="col-6"></bbl-libros-by-service>
      </div>
    </div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
