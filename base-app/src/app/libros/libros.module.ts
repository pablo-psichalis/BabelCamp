import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../servicios/books.service';
import { LibrosMocComponent } from './libros-moc/libros-moc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule
  ],
  exports: [
    LibrosComponent
  ],
  declarations: [LibrosComponent, LibrosMocComponent],
  providers: [BooksService]
})
export class LibrosModule { }
