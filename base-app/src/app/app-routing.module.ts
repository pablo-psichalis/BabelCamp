import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule' },
  { path: 'comunicaciones', loadChildren: './comunicaciones/comunicaciones.module#ComunicacionesModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule' },
  { path: 'printer', loadChildren: './printer/printer.module#PrinterModule' },
  { path: '', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
