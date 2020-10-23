import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaHerramientasComponent } from './lista-herramientas/lista-herramientas.component';
import { HerramientasComponent } from './herramientas/herramientas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaHerramientasComponent,
    HerramientasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
