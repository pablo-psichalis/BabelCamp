import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrinterRoutingModule } from './printer-routing.module';
import { PrinterComponent } from './printer.component';
import { FormTdComponent } from './form-td/form-td.component';

@NgModule({
  imports: [
    CommonModule,
    PrinterRoutingModule
  ],
  exports: [
    PrinterComponent
  ],
  declarations: [PrinterComponent, FormTdComponent]
})
export class PrinterModule { }
