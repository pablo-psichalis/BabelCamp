import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-comunicaciones',
  template: `
    <div class="container">
      <div class="row">
        <bbl-padre class="col-6"></bbl-padre>
      </div>
    </div>
  `,
  styles: []
})
export class ComunicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
