import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CabezaComponent } from './cabeza/cabeza.component';


@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Está vacío a posta porque un módulo se trata de un
// contenedor de referencias a los distintos
// elementos que forman parte de un módulo
// (declaraciones, importaciones, providers, exportaciones, etc)
//
// Main -> Modulo inicial -> bootstrap[AppComponent] (componente inicial) ...
//
export class AppModule { }
