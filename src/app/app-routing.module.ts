import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from './modulos/proyectos/proyectos.component';
import { RecursosComponent } from './modulos/recursos/recursos.component';


const routes: Routes = [

  {path: 'recursos', component: RecursosComponent},
  {path: 'proyectos/:id', component: ProyectosComponent},
  {path: '', redirectTo: '/recursos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
