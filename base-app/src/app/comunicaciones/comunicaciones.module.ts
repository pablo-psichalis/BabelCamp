import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicacionesRoutingModule } from './comunicaciones-routing.module';
import { ComunicacionesComponent } from './comunicaciones.component';

@NgModule({
  imports: [
    CommonModule,
    ComunicacionesRoutingModule
  ],
  declarations: [ComunicacionesComponent],
  exports: [
    ComunicacionesComponent
  ]
})
export class ComunicacionesModule { }
