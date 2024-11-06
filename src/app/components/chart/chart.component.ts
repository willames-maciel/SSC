import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { error } from 'console';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})

export class ChartComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true })
  elemento!: ElementRef;
  chart: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url1 = 'http://localhost:3000/meses';
    const url2 = 'http://localhost:3000/ocorrencias';

    this.http.get(url1).pipe(
      catchError(error => {
        console.error('Erro ao buscar meses:', error);
        return of({ meses: [] });
      })
    ).subscribe((mesesData: any) => {
      this.http.get(url2).pipe(
        catchError(error => {
          console.error('Erro ao buscar ocorrências:', error);
          return of({ data: [] });
        })
      ).subscribe((ocorrenciasData: any) => {
        this.createChart(mesesData, ocorrenciasData);
      });
    });
  }

  private createChart(mesesData: any, ocorrenciasData: any): void {
    const meses = mesesData.meses.map((m: any) => m.nome);
    const datasets = ocorrenciasData.ocorrencias;

    const chartData = {
      labels: meses,
      datasets: datasets
    };

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
  }}
