import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros.component';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';

const routes: Routes = [
  { path: '', component: LibrosComponent },
  { path: '', component: LibrosBuscarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
