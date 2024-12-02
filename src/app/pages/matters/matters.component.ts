import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Assunto } from '../general-goal/general-goal.component';
import { AssuntoService } from '../../services/assunto.service';

export interface Assuntos extends Assunto {
  id_assunto: number;
  txt_assunto: string;
  status_assunto: string;
}

@Component({
  selector: 'app-matters',
  standalone: true,
  templateUrl: './matters.component.html',
  styleUrls: ['./matters.component.scss'],
  imports: [FormsModule]
})
export class MattersComponent implements OnInit {
  assuntos: Assuntos[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;
  assunto: string = '';
  situacao: string = '';


  constructor(private assuntoService: AssuntoService) {}

  ngOnInit(): void {
    this.fetchAssuntos();
  }

  fetchAssuntos(): void {
  this.assuntoService.getAssuntos().pipe(
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
      id_assunto: typeof item.id_assunto === 'number' ? item.id_assunto : 0,
      txt_assunto: item.txt_assunto || '',
      status_assunto: item.status_assunto || ''
    }));
    this.loading = false;
  });
}

  Verificar(event: Event): void {
    console.log('Clicado');
  }

  Apagar(){
    this.assunto = '';
    this.situacao = '';
}

Criar(){
  console.log('Criar');
}
}
