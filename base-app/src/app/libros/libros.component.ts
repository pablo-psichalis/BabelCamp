import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-libros',
  template: `
      <div class="container">
      <div class="row">
        <bbl-libros-moc class="col-6"></bbl-libros-moc>
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
