import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  sTarea: string;           // para escribir tareas nuevas
  aTareas: Array<string>;   // lista de tareas

  constructor() {
    // Inicializar aquí los EventEmitters
  }

  ngOnInit() {
    // Inicializar aquí por
    // recomendación de estilo en Angular
    this.aTareas = [];
  }

  addTarea() {
    this.aTareas.push(this.sTarea);
  }

}
