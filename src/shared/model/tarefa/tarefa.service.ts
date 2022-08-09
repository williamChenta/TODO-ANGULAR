import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarefa } from './tarefa';

@Injectable()
export class TarefaService {
    private tarefasUrl = `${environment.apiURL}/Todos`;  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    /** GET tarefas from the server */
    getTarefas(): Observable<Tarefa[]> {
        return this.http.get<Tarefa[]>(this.tarefasUrl)
    }

    /** POST: add a new tarefa to the server */
    addTarefa(tarefa: Tarefa): Observable<Tarefa> {
        return this.http.post<Tarefa>(this.tarefasUrl, tarefa, this.httpOptions);
    }

    /** PUT: update tarefa to the server */
    updateTarefa(tarefa: Tarefa): Observable<Tarefa> {
        return this.http.put<Tarefa>(this.tarefasUrl, tarefa, this.httpOptions);
    }

    /** DELETE: delete the tarefa from the server */
    deleteTarefa(id: number): Observable<Tarefa> {
        const url = `${this.tarefasUrl}/${id}`;
        return this.http.delete<Tarefa>(url, this.httpOptions);
    }
}