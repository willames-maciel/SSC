import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: '<app-chart></app-chart>',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],


})
export class UsersComponent {
  tooltipVisible: boolean = false;
  showTooltip() {
    this.tooltipVisible = true;
  }

  hideTooltip() {
    this.tooltipVisible = false;

}
password: string = '123456';
  isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleEmailVisibility() {
    const emailHidden = document.querySelector('.email-hidden') as HTMLElement;
    if (emailHidden) {
        emailHidden.style.display = emailHidden.style.display === 'none' ? 'inline' : 'none';
    }
}
}
