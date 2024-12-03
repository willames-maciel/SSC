import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Assunto } from '../general-goal/general-goal.component';
import { AssuntoService } from '../../services/assunto.service';
import { DataLoaderComponent } from "../../components/data-loader/data-loader.component";


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
  imports: [FormsModule, DataLoaderComponent]
})
export class MattersComponent implements OnInit {
  assuntos: Assuntos[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;
  assunto: string = '';
  situacao: string = '';
  data: any | null = null;



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

  this.loading = true;
  console.log('Verificando...');
  this.fetchAssuntos();
}

Apagar(): void {

  this.assunto = '';
  this.situacao = '';
  this.loading = true;
  this.fetchAssuntos();
}

Criar(): void {

  console.log('Criar');
  this.loading = true;
  this.fetchAssuntos();
}


loadData() {
  this.loading = true;
  this.data = null;
  this.errorMessage = null;

  this.assuntoService.getAssuntos().subscribe({
    next: (result) => {
      this.data = result;
      this.loading = false;
    },
    error: () => {
      this.errorMessage = 'Erro ao carregar dados';
    }
  });
}
}
