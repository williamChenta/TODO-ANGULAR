import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from 'src/shared/model/tarefa/tarefa';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.list.component.html',
  styleUrls: ['./todo.list.component.css']
})

export class TodoListComponent { 
  @Input("tarefas") tarefas!: Tarefa[];  
  @Output() deleteTodo = new EventEmitter<Tarefa>();
  @Output() updateTodo = new EventEmitter<Tarefa>();

  excluir(tarefa: Tarefa) {
    this.deleteTodo.emit(tarefa);
  }
  
  alterar(tarefa: Tarefa) {
    if (!tarefa.concluida) {
      this.updateTodo.emit(tarefa);      
    }
  }

  concluir(tarefa: Tarefa) {
    tarefa.concluida = true;
    this.updateTodo.emit(tarefa);      
  }
}
