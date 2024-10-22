import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url1 = 'http://localhost:3000/meses';
    const url2 = 'http://localhost:3000/ocorrencias';


    this.http.get(url1).subscribe((mesesData: any) => {
      this.http.get(url2).subscribe((ocorrenciasData: any) => {
        this.createChart(mesesData, ocorrenciasData);
      });
    });
  }

  private createChart(mesesData: any, ocorrenciasData: any): void {
    const meses = mesesData.meses;
    const datasets = ocorrenciasData.data;

    const chartData = {
      labels: meses,
      datasets: datasets
    };

    const chartOptions = {
      type: 'line',
      data: chartData,
      options: {
        responsive: false,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
          title: {
            display: true,
            text: 'Gráfico Teste'
          }
        },
        layout: {
          padding: 1
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Meses'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Valores'
            }
          }
        }
      }
    };

    new Chart(this.elemento.nativeElement, chartOptions);
  }
}
