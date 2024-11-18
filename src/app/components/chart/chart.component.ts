import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { catchError, of } from 'rxjs';
import { ChartService } from '../../services/chart.service.service';

Chart.register(...registerables);

export interface Ocorrencia {
  valor: number;
  label: string;
  data: number[];
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
}
export interface Ausencia {
  colaborador: string;
  date: string;
  motivo: string;
  situacao: string;
  observacao: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
}
export interface Horas{
  colabordor: string;
  date: string;
  situacao: string;
  evento: string;
}

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})

export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;
  @ViewChild("donutCanvas", { static: true }) donutCanvas!: ElementRef;
  @ViewChild("lineCanvas", { static: true }) lineCanvas!: ElementRef;
  chart:  any;
  donutChart: any;
  lineChart: any;
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.getOcorrencias().pipe(
      catchError(error => {
        console.error('Erro ao buscar dados:', error);
        this.loading = false;
        this.errorMessage = 'Erro ao carregar dados. Tente novamente mais tarde.';
        return of([]);
      })
    ).subscribe((ocorrencias: any[]) => {
      this.loading = false;
      console.log('Dados recebidos da API:', ocorrencias);

      if (!ocorrencias || !Array.isArray(ocorrencias) || ocorrencias.length === 0) {
        console.error('Dados de meses ou ocorrências não estão disponíveis');
        this.errorMessage = 'Dados de meses ou ocorrências não estão disponíveis.';
        return;
      }

    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

      const ocorrenciasData = ocorrencias.map(ocorrencia => ({
        label: ocorrencia.label,
        data: ocorrencia.data,
        backgroundColor: ocorrencia.backgroundColor,
        borderColor: ocorrencia.borderColor,
        borderWidth: ocorrencia.borderWidth,
      }));

      console.log('Meses:', meses);
      console.log('Ocorrências:', ocorrenciasData);
      this.createChart(meses, ocorrenciasData);
    });
  }

  private createChart(mesesData: string[], ocorrenciasData: any[]): void {
    const meses = mesesData;
    const datasets = ocorrenciasData.map((ocorrencia: any) => ({
      label: ocorrencia.label,
      data: ocorrencia.data,
      backgroundColor: ocorrencia.backgroundColor,
      borderColor: ocorrencia.borderColor,
      borderWidth: ocorrencia.borderWidth,
      fill: true,
      tension: 0.2
    }));

    const chartData = {
      labels: meses,
      datasets: datasets
    };

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
              text: 'Ano de 2024'
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
