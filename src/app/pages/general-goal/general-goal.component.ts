import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Item {
  icon: string;
  label: string;
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
    {icon: "fa-solid fa-chevron-down", label: 'Telefonia'},
    {icon: "fa-solid fa-chevron-down", label: 'Retornos'},
    {icon: "fa-solid fa-chevron-down", label: 'Tercerização'},
    {icon: "fa-solid fa-chevron-down", label: 'Estrutura e Funcionamento da Central'},
    {icon: "fa-solid fa-chevron-down", label: 'Ferias'},
    {icon: "fa-solid fa-chevron-down", label: 'Sistemas'},
    {icon: "fa-solid fa-chevron-down", label: 'Atendimento'},
    {icon: "fa-solid fa-chevron-down", label: 'Problemas técnico'},
    {icon: "fa-solid fa-chevron-down", label: 'Login'},
    {icon: "fa-solid fa-chevron-down", label: 'Capacitação'},
    {icon: "fa-solid fa-chevron-down", label: 'Equipamento'},
    {icon: "fa-solid fa-chevron-down", label: 'Orientações de chamdo'},
    {icon: "fa-solid fa-chevron-down", label: 'Evento 155'},
    {icon: "fa-solid fa-chevron-down", label: 'Acesso remoto'},
    {icon: "fa-solid fa-chevron-down", label: 'Relatório individual'},
    {icon: "fa-solid fa-chevron-down", label: 'T.I'},
    {icon: "fa-solid fa-chevron-down", label: 'Telefones bloqueados'},
    {icon: "fa-solid fa-chevron-down", label: 'Whatsapp'},
    {icon: "fa-solid fa-chevron-down", label: 'Visita ao prédio'},
    {icon: "fa-solid fa-chevron-down", label: 'Relacionamento interpessoal'},
    {icon: "fa-solid fa-chevron-down", label: 'Plantão'},


  ];

selectedItem: Item | null =  null;


    public selectItem(itemValue: string) {
        console.log('Função selectItem chamada!', itemValue);

}}
