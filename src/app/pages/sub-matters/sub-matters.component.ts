import { Component, NgModule, ViewEncapsulation, input } from '@angular/core';
import { MyInputComponent } from '../../my-input/my-input.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-sub-matters',
  standalone: true,
  imports: [MyInputComponent],
  templateUrl: './sub-matters.component.html',
  styleUrl: './sub-matters.component.scss',
  template: '<input type="text"/>',
  styles: [
    `
      input{
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  background-color: red;
}

    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,

})
export class SubMattersComponent {
  email : string = '';
  nome : string = '';



}
