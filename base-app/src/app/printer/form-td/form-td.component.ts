import { Component, OnInit } from '@angular/core';
import { Printer, DepartamentoIf } from '../modelos/master.model';
import { Dptos, Printers } from '../modelos/master.data';
import { OrdenPrintIf } from '../modelos/ordenprint.model';

@Component({
  selector: 'bbl-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  aPrinters: Array<Printer>;
  aDptos: Array<DepartamentoIf>;
  ordenPrint: OrdenPrintIf;

  constructor() { }

  ngOnInit() {
    this.aPrinters = Printers;
    this.aDptos = Dptos;
    this.ordenPrint = {
      user: {nombre: '', apellidos: '', telefono: ''},
      impresora: {id: '', name: ''},
      isColor: false,
      isClara: false,
      dpto: {id: '', name: ''}
    };
  }

}
