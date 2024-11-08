import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, of } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild("meuCanvas", { static: true })
  elemento!: ElementRef;
  chart: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = 'http://localhost:3000/dados'; // Ajuste a URL conforme necessário

    this.http.get(url).pipe(
      catchError(error => {
        console.error('Erro ao buscar dados:', error);
        return of({ meses: [], ocorrencias: [] }); // Retorna arrays vazios em caso de erro
      })
    ).subscribe((data: any) => {
      if (!data || !data.meses || !data.ocorrencias) {
        console.error('Dados de meses ou ocorrências não estão disponíveis');
        return;
      }

      console.log('Meses:', data.meses);
      console.log('Ocorrências:', data.ocorrencias);
      this.createChart(data.meses, data.ocorrencias);
    });
  }

  private createChart(mesesData: any, ocorrenciasData: any): void {
    const meses = mesesData.map((m: any) => m.nome);
    const datasets = ocorrenciasData;

    const chartData = {
      labels: meses,
      datasets: datasets
    };

    // Destruir o gráfico anterior, se existir
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: 'Gráfico de Ocorrências'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Meses'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Valores'
            },
            beginAtZero: true
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
