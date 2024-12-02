import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Assunto, SubAssuntos } from '../pages/general-goal/general-goal.component';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {
  private urlApi = 'http://192.168.2.93:8080/api/v1';

  constructor(private http: HttpClient) {}

  getAssuntos(): Observable<any> {
    return this.http.get(`${this.urlApi}/assuntos?page=0&size=10&sort=txtAssunto`);
  }

  getBySunAssunto(id: any){
    return this.http.get(`${this.urlApi}/assuntos/sub/${id}?page=0&size=10&sort=txt_sub_assunto`);
  }

  getSubAssunto(idAssunto: any ): Observable<SubAssuntos[]> {
    return this.http.get<any>(`http://192.168.2.93:8080/api/v1/assuntos/sub/${idAssunto}?page=0&size=10&sort=txt_sub_assunto`).pipe(
      map(response => {
        const subAssuntos: SubAssuntos[] = response.content.flatMap((assunto: any) =>


          assunto.subAssunto.map((sub: any) => ({
            id_sub_assunto: sub.id_sub_assunto,
            txtSubAssunto: sub.txtSubAssunto,
            status_sub_assunto: sub.status_sub_assunto
          }))
        );
        return subAssuntos;
      }),
      catchError((error) => {
        console.error('Error em carregar SubAssuntos:', error);
        return of([]);
      })
    );
  }

  // getAssuntosBySubAssuntos(): Observable<Assunto[]> {
  //   return forkJoin([this.getAssuntos(), this.getSubAssunto(1)]).pipe(
  //     map(([assuntos, subAssuntos]) => {
  //       return assuntos.map(assunto => {
  //         assunto.subAssunto = subAssuntos.filter(sub => sub.id_sub_assunto === assunto.id_assunto);
  //         return assunto;
  //       });
  //     }),
  //     catchError((error) => {
  //       console.error('Error em carregar Assuntos com SubAssuntos:', error);
  //       return of([]);
  //     })
  //   );
  // }

}
