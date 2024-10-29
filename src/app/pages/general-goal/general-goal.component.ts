import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Item {
  icon: string;
  label: string;
  tabs: Tab[];
  isTabVisible: boolean;
  isDropdownVisible: boolean;
  options: string[];
}
interface Tab{
  title:  string;

}
interface Assunto {
  subassuntos: { titulo: string; situacao: string }[];
}

@Component({
  selector: 'app-general-goal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-goal.component.html',
  styleUrl: './general-goal.component.scss'
})


export class GeneralGoalComponent {
  assunto: Assunto = {
    subassuntos: [
      { titulo: 'Subassunto 1', situacao: 'Ativo' },
      { titulo: 'Subassunto 2', situacao: 'Inativo' },
    ],
  };
  itens: Item[] = [
    {icon: "fa-solid fa-chevron-down", label: 'Telefonia',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3'] },
    {icon: "fa-solid fa-chevron-down", label: 'Retornos',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Tercerização',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Estrutura e Funcionamento da Central',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Ferias',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Sistemas',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Atendimento',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Problemas técnico',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Login',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Capacitação',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Equipamento',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Orientações de chamdo',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Evento 155',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Acesso remoto',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Relatório individual',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'T.I',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Telefones bloqueados',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Whatsapp',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Visita ao prédio',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
    {icon: "fa-solid fa-chevron-down", label: 'Relacionamento interpessoal',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3'] },
    {icon: "fa-solid fa-chevron-down", label: 'Plantão',tabs: [],isTabVisible: false, isDropdownVisible: false, options: ['Opção 1', 'Opção 2', 'Opção 3']  },
  ];

selectedItem: Item | null =  null;
bdData: any;

constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.http.get('src/assets/db.json')
      .subscribe(data => {
        this.bdData = data;
        console.log('Dados carregados:', this.bdData);
      }, error => {
        console.error('Erro ao carregar dados:', error);
      });
  }

  public selectItem(itemValue: string) {
    console.log('Função selectItem chamada!', itemValue);
  }

  public addTab(item: Item) {
    const newTab: Tab = {
      title: item.label,
    };
    item.tabs.push(newTab);
    console.log('Nova aba:', newTab);
  }

  public toggleTabVisibility(item: Item) {
    item.isTabVisible = !item.isTabVisible;
  }

  public toggleDropdown(item: Item) {
    item.isDropdownVisible = !item.isDropdownVisible;
  }

  public selectOption(option: string) {
    console.log('Opção selecionada:', option);
  }
}
