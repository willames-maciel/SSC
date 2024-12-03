import { Component } from '@angular/core';
import { AssuntoService } from '../../services/assunto.service';

@Component({
  selector: 'app-data-loader',
  standalone: true,
  templateUrl: './data-loader.component.html',
  styleUrls: ['./data-loader.component.scss']
})
export class DataLoaderComponent {
  isLoading = false;
  data: any | null = null;
  errorMessage: string | null = null;

  constructor(private assuntoService: AssuntoService) {}

  loadData() {
    this.isLoading = true;
    this.data = null;
    this.errorMessage = null;

    this.assuntoService.getAssuntos().subscribe({
      next: (result) => {
        this.data = result;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar dados';
      }
    });
  }
}
