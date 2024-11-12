import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ocorrencia } from '../components/chart/chart.component';

@Injectable({
  providedIn: 'root'
})

export class ChartService {
  private urlApi: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getOcorrencias(): Observable<Ocorrencia[]> {
    return this.http.get<Ocorrencia[]>(`${this.urlApi}/ocorrencias`).pipe(
      catchError(error => {
        console.error('Erro ao buscar ocorrências:', error);
        return of([]);
      })
    );
  }
}
