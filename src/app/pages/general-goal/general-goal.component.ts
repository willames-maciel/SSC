import { AssuntoService } from './../../services/assunto.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Assunto {
  id_assunto: string;
  txt_assunto: string;
  status_assunto: string;
  isDropdownVisible: boolean;
  icon: string;
}

export interface SubAssuntos {
  id: string;
  name: string;
  situacao: string;
  idassunto: string;
}

@Component({
  selector: 'app-general-goal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-goal.component.html',
  styleUrls: ['./general-goal.component.scss']
})
export class GeneralGoalComponent {
  listAssunto: Assunto[] = [];
  listSubAssunto: SubAssuntos[] = [];
  selectedSubAssunto: SubAssuntos | null = null;
  subAssunto: any;

  constructor(private assuntoService: AssuntoService) {}

  ngOnInit(): void {
    this.callAssunto();
    this.callSubAssunto();
  }

  callAssunto() {
    this.assuntoService.getAssunto().subscribe(data => {
      this.listAssunto = data.map(assunto => ({
        ...assunto,
        isDropdownVisible: false
      }));
      console.log("assuntos", this.listAssunto);
    });
  }

  callSubAssunto() {
    this.assuntoService.getSubAssunto().subscribe(data1 => {
      console.log("Hello world");
    });
  }

  public toggleDropdown(item: Assunto) {

    this.listAssunto.forEach(assunto => {
      if (assunto !== item) {
        assunto.isDropdownVisible = false;
      }
    });


    item.isDropdownVisible = !item.isDropdownVisible;


    if (item.isDropdownVisible) {

      this.assuntoService.getByIdSubAssunto(item.id_assunto).subscribe({
        next: (data: SubAssuntos[]) => {
          console.log("Data", data);
          this.listSubAssunto = data;
        },

        error: (error: any) => {
          console.error("Erro: ", error);
        }
      });
    }
  }
  onEditClick(subAssunto: SubAssuntos){
    this.selectedSubAssunto = {...subAssunto};
    alert('clicado')

  }
  onSubmit(){
    console.log("Dados Editado: ", this.selectedSubAssunto);
    this.selectedSubAssunto = null;
  }
  cancelEdit(){
    this.selectedSubAssunto = null;
  }
}
