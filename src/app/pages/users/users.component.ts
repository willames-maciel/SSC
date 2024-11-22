import { Component } from '@angular/core';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  template: '<app-chart></app-chart>',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],


})
export class UsersComponent {
  tooltipVisible: boolean = false;
  showTooltip() {
    this.tooltipVisible = true; // Mostrar tooltip
  }

  hideTooltip() {
    this.tooltipVisible = false;

}
}
