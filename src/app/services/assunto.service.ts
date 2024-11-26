import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Assunto, SubAssuntos } from '../pages/general-goal/general-goal.component';
import { assuntos } from '../pages/matters/matters.component';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {

  private urlApi: string = 'http://192.168.2.93:8080/api/v1/assuntos';

  constructor(private http: HttpClient) { }

  getAssunto(): Observable<assuntos[]> {
    return this.http.get<assuntos[]>(this.urlApi).pipe(
      tap((data: any) => console.log('Dados recebidos do serviço:', data)),
      catchError((error) => {
        console.error('Erro ao buscar Assunto:', error);
        throw error;
      })
    );
  }

  getByIdSubAssunto(id: any): Observable<SubAssuntos[]> {
    return this.http.get<SubAssuntos[]>(`${this.urlApi}/subassuntos?idassunto=${id}`).pipe(
      catchError((error) => {
        console.error('Error em carregar SubAssuntos por ID:', error);
        throw error;
      })
    );
  }

  getSubAssunto(): Observable<SubAssuntos[]> {
    return this.http.get<SubAssuntos[]>(`${this.urlApi}/subassuntos`).pipe(
      catchError((error) => {
        console.error('Error em carregar SubAssuntos:', error);
        throw error;
      })
    );
  }
}
