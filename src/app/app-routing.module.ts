import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListasedesComponent } from './sedes/listasedes/listasedes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaDisciplinasComponent } from './disciplinas/lista-disciplinas/lista-disciplinas.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio',  pathMatch: 'full'},
  { path: 'inicio', component:InicioComponent},
  { path: 'sedes', component:ListasedesComponent},
  { path: 'disciplinas', component: ListaDisciplinasComponent}
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
