import { Component, OnInit } from '@angular/core';
import { Printer, DepartamentoIf } from '../modelos/master.model';
import { Dptos, Printers } from '../modelos/master.data';

@Component({
  selector: 'bbl-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  aPrinters: Array<Printer>;
  aDptos: Array<DepartamentoIf>;

  constructor() { }

  ngOnInit() {
    this.aPrinters = Printers;
    this.aDptos = Dptos;
  }

}
