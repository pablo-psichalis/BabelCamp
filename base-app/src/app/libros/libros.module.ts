import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../servicios/books.service';
import { LibrosMocComponent } from './libros-moc/libros-moc.component';
import { FormsModule } from '@angular/forms';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { LibrosByServiceComponent } from './libros-by-service/libros-by-service.component';
import { GoogleBooksService } from '../servicios/google-books.service';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    LibrosComponent,
    LibrosBuscarComponent
  ],
  declarations: [LibrosComponent, LibrosMocComponent, LibrosBuscarComponent, LibrosByServiceComponent],
  providers: [
    BooksService,
    GoogleBooksService
  ]
})
export class LibrosModule { }
