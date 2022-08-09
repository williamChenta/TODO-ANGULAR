import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tarefa } from 'src/shared/model/tarefa/tarefa';
import { TarefaService } from 'src/shared/model/tarefa/tarefa.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit, OnDestroy {
  title = 'Organizador de coisas para fazer';
  tituloCardCadastro = 'Adicionar uma coisa';

  tarefas: Tarefa[] = [];
  tarefa: Tarefa = this.recriarTarefa();

  constructor(private tarefaService: TarefaService){}
  
  ngOnInit() {
    this.carregarTarefas()
  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  carregarTarefas() {
    this.tarefaService.getTarefas().subscribe(tarefas => this.tarefas = tarefas);
  }

  adicionarTarefa(tarefa: Tarefa) {
    if (this.tarefa.id == 0) {
      this.tarefaService.addTarefa(this.tarefa as Tarefa).subscribe();
    } else {
      this.tarefaService.updateTarefa(this.tarefa as Tarefa).subscribe();
    }
    this.tarefas.push(tarefa);
    this.tarefa = this.recriarTarefa();
  }

  excluirTarefa(tarefa: Tarefa) {
    if (confirm(`Excluir a tarefa ${tarefa.descricao}?`)) {
      this.tarefas = this.tarefas.filter(t => t !== tarefa);
      this.tarefaService.deleteTarefa(tarefa.id).subscribe();
    }
  }

  alterarTarefa(tarefa: Tarefa) {
    if (!tarefa.concluida) {
      this.tarefa = tarefa;      
    } else {
      this.atualizarTarefa(tarefa);
    }
  }

  atualizarTarefa(tarefa: Tarefa) {
    this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
    this.adicionarTarefa(tarefa);
  }

  novaTarefa() {
    this.tarefa = this.recriarTarefa();
  }

  recriarTarefa(): Tarefa {
    return {
      id: 0,
      descricao: '',
      concluida: false
    }
  }
}