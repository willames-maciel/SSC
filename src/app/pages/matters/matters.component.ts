import { Component, OnInit } from '@angular/core';
import { AssuntoService } from './../../services/assunto.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Assunto } from '../general-goal/general-goal.component';

export interface assuntos extends Assunto {
  id_assunto: string;
  txt_assunto: string;
  status_assunto: string;
}

@Component({
  selector: 'app-matters',
  standalone: true,
  templateUrl: './matters.component.html',
  styleUrls: ['./matters.component.scss']
})
export class MattersComponent implements OnInit {
  assuntos:assuntos[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;
  Assunto: Assunto[] | undefined;

  constructor(private assuntoService: AssuntoService) {}

  ngOnInit(): void {
    this.fetchAssuntos();
  }

fetchAssuntos(): void {
  this.assuntoService.getAssunto().pipe(
    catchError((error) => {
      console.error('Erro ao buscar dados: ', error);
      this.errorMessage = 'Erro ao carregar dados';
      this.loading = false;
      return of([] as Assunto[]);
    })
  ).subscribe((data: Assunto[]) => {
    console.log('Dados recebidos no componente:', data);
    this.assuntos = data.map(item => ({
      ...item,
      id_assunto: item.id_assunto || '',
      txt_assunto: item.txt_assunto || '',
      status_assunto: item.status_assunto || ''
    }));
    this.loading = false;
  });
}
Verificar(){
  console.log('Clicado',this.assuntos);

}
}
