import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assunto, SubAssuntos } from '../pages/general-goal/general-goal.component';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {

  urlApi: string =  'http://localhost:3000';

  constructor(private Http:  HttpClient) { }

  getAssunto(): Observable<Assunto[]>{
    return this.Http.get<Assunto[]>(this.urlApi+'/assunto')
  }
  getByIdSubAssunto(id: any):Observable<SubAssuntos[]>{
    return this.Http.get<SubAssuntos[]>(this.urlApi+`/subassuntos?idassunto=${id}`)
  }

  getSubAssunto():Observable<SubAssuntos[]>{
    return this.Http.get<SubAssuntos[]>(this.urlApi+`/subassuntos`)
  }

}
