import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'bbl-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {

  @ViewChild('locNombre') sName: any;
  constructor() { }

  ngOnInit() {
    console.log(this.sName);
  }

}
