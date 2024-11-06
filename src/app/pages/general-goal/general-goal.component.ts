import { AssuntoService } from './../../services/assunto.service';
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

interface Item {
  icon: string;
  label: string;
  isDropdownVisible: boolean;
}
export interface Assunto{
  id: string;
  name:string;
  situacao: string;
}
export interface SubAssuntos{
  id:string;
  name:string;
  situacao: string;
  idassunto:string;
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
    {icon: "fa-solid fa-chevron-down", label: 'Telefonia', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Retornos', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Tercerização', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Estrutura e Funcionamento da Central', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Ferias', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Sistemas', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Atendimento', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Problemas técnico', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Login', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Capacitação', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Equipamento', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Orientações de chamdo', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Evento 155', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Acesso remoto', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Relatório individual', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'T.I', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Telefones bloqueados', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Whatsapp', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Visita ao prédio', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Relacionamento interpessoal', isDropdownVisible: false,},
    {icon: "fa-solid fa-chevron-down", label: 'Plantão', isDropdownVisible: false,},
  ];

isDropdownVisible : boolean = false;
selectedItem: Item | null =  null;
listAssunto:Assunto[]= [] ;
listSubAssunto: SubAssuntos[] = [];


constructor(private assuntoService: AssuntoService) {}

ngOnInit(): void{
  this.callAssunto();
  this.callSubAssunto();
}

  public toggleDropdown(item: Assunto, e:any) {
    this.isDropdownVisible = !this.isDropdownVisible;
    let element = document.getElementById('test_'+item.id) as HTMLLIElement;
    if(this.isDropdownVisible= false){
    element.style.display='block';
    console.log("Cat: ", element);
  }}

callAssunto(){
  this.assuntoService.getAssunto().subscribe(data => {
    this.listAssunto = data;
    console.log("assuntos",this.listAssunto,data[1].name);
  });
  }

  callSubAssunto(){
    this.assuntoService.getSubAssunto().subscribe(data1=> {
      this.listSubAssunto = data1;
      console.log("subassuntos",this.listSubAssunto, data1[12].name);

    });
  }
  //   check(){
  //     for(i in length(data))
  //   if (data[i].id === data1[i].idassuntos) {
  //     console.log('Certo');
  //   }
  //   else{
  //     console.log('Errado');
  //   }
  // }
  }
