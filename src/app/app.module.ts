import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { SedesComponent } from './sedes/sedes.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { HttpClientModule } from "@angular/common/http";
import { DisciplinasService } from './disciplinas.service';
import { ListasedesComponent } from './sedes/listasedes/listasedes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaDisciplinasComponent } from './disciplinas/lista-disciplinas/lista-disciplinas.component';

@NgModule({
  declarations: [
    AppComponent,
    SedesComponent,
    DisciplinasComponent,
    ListasedesComponent,
    InicioComponent,
    ListaDisciplinasComponent,
    
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, DisciplinasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
