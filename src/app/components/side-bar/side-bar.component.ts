import { CommonModule, NgClass } from '@angular/common';
import { Component, Input,output,Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventEmitterService } from '../../services/event-emitter';
import { EventEmitter } from 'events';
import { routes } from '../../app.routes';


interface Item {
  value: string;
  route: string;
  icon: string;
  label: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, NgClass,CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers: [EventEmitterService]
})

export class SidebarComponent {


     itens: Item[] = [
    { value: 'inicio', route: '/app', icon: 'fa-solid fa-house-chimney', label: 'Início',isSelected: false },
    { value: 'atendimentos', route: '/app/Atendimentos', icon: 'fa-solid fa-headphones', label: 'Atendimentos',isSelected: false},
    { value : 'ocorrencia', route: '/app/Ocorrencias', icon: 'fa-solid fa-circle-exclamation', label: 'Ocorrência', isSelected: false },
    { value: 'ausencias', route: '/app/Ausencias', icon: 'fa-solid fa-user-slash', label: 'Ausências', isSelected: false },
    { value: 'banco-horas', route: '/app/BancoDeHoras', icon: 'fa-solid fa-hourglass-half', label: 'Banco de Horas', isSelected: false },
    { value: 'atrasos', route: '/app/Atrasos', icon: 'fa-regular fa-clock', label: 'Atraso', isSelected: false },
    { value: 'relatorio-estatistica', route: '/app', icon: 'fa-solid fa-chart-simple', label: 'Relatório e Estatística', isSelected: false },
    { value: 'configuracoes', route: '/app', icon: 'fa-solid fa-gear', label: 'Configurações', isSelected: false },
    { value: 'sair', route: '/app/Sair', icon: 'fa-solid fa-right-from-bracket', label: 'Sair', isSelected: false }
  ];



  selectedItem: Item | null | undefined;

  @Output() itensChange = new EventEmitter<any>();

public selectItem(itemValue: string) {
  console.log('Função selectItem chamada!');
  this.itens.forEach((item) => {
    item.isSelected = item.value === itemValue;


  });
  this.itensChange.emit(this.itens);
  this.selectedItem = this.itens.find((item) => item.value === itemValue);
  EventEmitterService.get("nameheader").emit(this.selectedItem);



}




  isActive: boolean = false;

  isTest() {
    EventEmitterService.emit("Reduzir", this.isActive);
    this.isActive = !this.isActive;
    console.log(this.isActive, 'ola');
  }


}



