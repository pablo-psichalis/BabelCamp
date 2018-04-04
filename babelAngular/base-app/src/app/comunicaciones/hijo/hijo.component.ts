import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bbl-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string;
  @Output() respuesta: EventEmitter<string>;
  miNombre: string;

  constructor() {
    // onInit() se ejecuta más tarde que el constructor
    // es necesario inicializar la respuesta aquí
    this.respuesta = new EventEmitter();

    // tira error al ponerlo en ngOnInit()
  }

  ngOnInit() {
  }

  btnOdiar() {
    this.respuesta.emit(this.miNombre);
  }

}
