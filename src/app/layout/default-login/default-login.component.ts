import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-default-login',
  standalone: true,
  imports: [RouterModule, FooterComponent, ReactiveFormsModule],
  templateUrl: './default-login.component.html',
  styleUrl: './default-login.component.scss'
})
export class DefaultLoginComponent {

  loginForm!: FormGroup;

  imgLogoSSC: string = "assets/svg/logo-ssc-branca.svg";
  imgLogoCGE: string = "assets/svg/logo-cge.svg";

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

}
