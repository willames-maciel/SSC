import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-sub-matters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sub-matters.component.html',
  styleUrl: './sub-matters.component.scss',



})
export class SubMattersComponent {
  assunto: string = '';
  situacao: string = '';


Verificar(event: Event): void {
  console.log('Clicado');
}

Apagar(){
  this.assunto = '';
  this.situacao = '';
}

Criar(){
  console.log('Criar');
}

}
