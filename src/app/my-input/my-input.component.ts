import { Component, EventEmitter, Input, Output, input } from '@angular/core';


@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
  standalone: true,
  imports: []


})
export class MyInputComponent {
  @Input() textPlaceholder: string = 'Digite aqui...';
  @Input() valor: string = '';
  @Input() input!: any;
  @Output() valorChange: EventEmitter<string> = new EventEmitter<string>();

}
