import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Item {
  icon: string;
  label: string;
  tabs: Tab[];
  isTabVisible: boolean;
}
interface Tab{
  title:  string;

}

@Component({
  selector: 'app-general-goal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-goal.component.html',
  styleUrl: './general-goal.component.scss'
})


export class GeneralGoalComponent {

  itens: Item[] = [
    {icon: "fa-solid fa-chevron-down", label: 'Telefonia',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Retornos',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Tercerização',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Estrutura e Funcionamento da Central',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Ferias',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Sistemas',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Atendimento',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Problemas técnico',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Login',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Capacitação',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Equipamento',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Orientações de chamdo',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Evento 155',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Acesso remoto',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Relatório individual',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'T.I',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Telefones bloqueados',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Whatsapp',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Visita ao prédio',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Relacionamento interpessoal',tabs: [],isTabVisible: false },
    {icon: "fa-solid fa-chevron-down", label: 'Plantão',tabs: [],isTabVisible: false },


  ];

selectedItem: Item | null =  null;


    public selectItem(itemValue: string) {
        console.log('Função selectItem chamada!', itemValue);

}

public addTab(item:Item){
  const newTab: Tab = {
    title: item.label,

};
item.tabs.push(newTab);
console.log('Nova aba:', newTab);
}
public toggleTabVisibility(item: Item) {
  item.isTabVisible = !item.isTabVisible;
}

}
