import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { AjudaComponent } from './ajuda/ajuda.component';

const routes: Routes = [
  { path: 'ajuda', component: AjudaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
