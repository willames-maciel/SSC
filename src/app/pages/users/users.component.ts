import { Component } from '@angular/core';
import { ChartComponent } from "../../components/chart/chart.component";


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ChartComponent],
  template: '<app-chart></app-chart>',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],


})
export class UsersComponent {

}
