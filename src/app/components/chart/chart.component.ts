import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { catchError, of } from 'rxjs';
import { ChartService } from '../../services/chart.service.service';

Chart.register(...registerables);

export interface Usuario{
  id: number;
  name:string;
  email: string;
  password: string;
  cargo:string;
}

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

export interface Horas {
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
  @ViewChild("barCanvas", { static: true }) barCanvas!: ElementRef;
  chart: any;
  donutChart: any;
  barChart: any;
  loading: boolean = true;
  errorMessage: string | null = null;
  ausencias: Ausencia[] = [];

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

      const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

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


      this.chartService.getAusencia().pipe(
        catchError(error => {
          console.error('Erro ao buscar dados de ausências:', error);
          this.loading = false;
          this.errorMessage = 'Erro ao carregar dados de ausências. Tente novamente mais tarde.';
          return of([]);
        })
      ).subscribe((ausencias: Ausencia[]) => {
        this.loading = false;
        this.ausencias = ausencias;
        this.createAbsenceChart();
      });
    });
  }

  private createAbsenceChart(): void {
    const contagemAusencias = {
      falta: this.ausencias.filter(a => a.motivo === 'Falta').length,
      atestado: this.ausencias.filter(a => a.motivo === 'Atestado').length,
      folga: this.ausencias.filter(a => a.motivo === 'Folga').length,
      ferias: this.ausencias.filter(a => a.motivo === 'Ferias').length,
    };

    const chartData = {
      labels: ['Falta', 'Atestado', 'Folga', 'Férias'],
      datasets: [{
        label: 'Número de Ausências',
        data: [
          contagemAusencias.falta,
          contagemAusencias.atestado,
          contagemAusencias.folga,
          contagemAusencias.ferias
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(255, 206, 86, 0.4)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    };

    if (this.barChart) {
      this.barChart.destroy();
    }

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: 'Gráfico de Ausências'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Número de Ausências'
            },
            beginAtZero: true
          },
          y: {
            title: {
              display: true,
              text: 'Motivos de Ausência'
            }
          }
        }
      }
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

    const totalDuration = 3000;
    const delayBetweenPoints = totalDuration / meses.length;

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
        },
        animation: {
          x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            delay: (ctx: { index: number; }) => ctx.index * delayBetweenPoints
          },
          y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            delay: (ctx: { index: number; }) => ctx.index * delayBetweenPoints
          }
        }
      }
    });
}

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.barChart) {
      this.barChart.destroy
    if (this.barChart) {
      this.barChart.destroy();
  }
}}}
