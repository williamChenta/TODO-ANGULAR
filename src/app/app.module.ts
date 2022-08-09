import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { InicioComponent } from './inicio/inicio.component';
import { TodoFormComponent } from './todo/form/todo.form.component';
import { TodoListComponent } from './todo/list/todo.list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TarefaService } from '../shared/model/tarefa/tarefa.service';
import { CardComponent } from 'src/shared/componentes/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    AjudaComponent,
    InicioComponent,
    TodoFormComponent,
    TodoListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
