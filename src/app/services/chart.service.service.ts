import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ausencia, Horas, Ocorrencia, Usuario } from '../components/chart/chart.component';

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
    );}

  getAusencia(): Observable<Ausencia[]> {
    return this.http.get<Ausencia[]>(`${this.urlApi}/ausencia`).pipe(
      catchError(error =>{
        console.error('Erro ao buscar ausência:', error);
        return of([]);
      })
    );}

    getHoras(): Observable<Horas[]> {
      return this.http.get<Horas[]>(`${this.urlApi}/BancodeHoras`).pipe(
        catchError(error =>{
          console.error('Erro ao buscar ausência:', error);
          return of([]);
        })
      );}

    getUsers(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(`${this.urlApi}/usuario`).pipe(
        catchError(error => {
          console.error('Erro ao buscar usuários:', error);
          return of([]);
      })
    );}
}
