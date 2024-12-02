import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [CommonModule]
})
export class UsersComponent {
  email: string = '';
  password: string = '';
  isPasswordVisible: boolean = false;
  isEmailVisible: boolean = false;
  tooltipVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  showTooltip() {
    this.tooltipVisible = true;
  }

  toggleEmailVisibility() {
    this.isEmailVisible = !this.isEmailVisible;
  }

  hideTooltip() {
    this.tooltipVisible = false;
  }

  onEmailInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.email = target.value;
  }

  onPasswordInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }
}
