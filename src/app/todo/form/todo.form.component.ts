import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TarefaService } from 'src/shared/model/tarefa/tarefa.service';
import { Tarefa } from '../../../shared/model/tarefa/tarefa';

@Component({
  selector: 'todo-form',
  templateUrl: './todo.form.component.html',
  styleUrls: ['./todo.form.component.css']
})
export class TodoFormComponent {
  @Input() titulo!: String;
  @Input() tarefa!: Tarefa;
  @Output() addedTodo = new EventEmitter<Tarefa>();
  @Output() updatedTodo = new EventEmitter<Tarefa>();
  @Output() newTodo = new EventEmitter();

  tituloBotao : String = 'Cadastrar';

  constructor(private tarefaService: TarefaService) { }

  ngOnChanges() {
    this.tituloBotao = this.tarefa.id > 0 ? 'Alterar' : 'Cadastrar';
  }

  cadastro() {
    this.tarefa.id == 0 ? this.addedTodo.emit(this.tarefa) : this.updatedTodo.emit(this.tarefa);
  }

  novo() {
    this.newTodo.emit();
  }
}
