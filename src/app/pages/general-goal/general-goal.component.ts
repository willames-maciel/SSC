import { AssuntoService } from './../../services/assunto.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { isTypedArray } from 'util/types';

export interface SubAssuntos {
  varSituacao: string;
  txtSubAssunto: string;
  status_sub_assunto: string;
  id_sub_assunto: number;
}

export interface Assunto {
  txt_assunto: string | null;
  status_assunto: string;
  id_assunto: number;
  subAssunto: SubAssuntos[];
  isDropdownVisible: boolean;
  icon: string;
}



@Component({
  selector: 'app-general-goal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './general-goal.component.html',
  styleUrls: ['./general-goal.component.scss']
})

export class GeneralGoalComponent {
  listAssunto: Assunto[] = [];
  listSubAssunto: SubAssuntos[] = [];
  selectedSubAssunto: SubAssuntos | null = null;
  subAssunto: any;
  i: any;
  varSituacao: string | undefined;

  constructor(private assuntoService: AssuntoService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.callAssunto();
    })


  }

  callAssunto() {
    this.assuntoService.getAssuntos().subscribe({
      next: (data) => {
        this.listAssunto = data.content;
        console.log("Carregando Assuntos: ", data.content);

        for (let i = 0; i < data.content.length; i++) {
          console.log("Carregando Dado do subassunto: ", data.content[i].subAssunto);

    for (let j = 0; j < data.content[i].subAssunto.length; j++) {

      console.log("Carregando Dado do subassunto 1: ", data.content[i].subAssunto[j]);
        const status = data.content[i].subAssunto[j].status_sub_assunto;

        if (status !== undefined) {
          console.log("Carregando Dado do subassunto 2: ", status);
            if (status !== "") {
                data.content[i].subAssunto[j].status_sub_assunto = "ATIVO";
            } else {
                data.content[i].subAssunto[j].status_sub_assunto = "INATIVO";
            }
        }
        this.varSituacao = data.content[i].subAssunto[j].status_sub_assunto;
    }




        /*for(let i=0; i<data.content.length; i++){
      console.log("Carregando Dado do subassunto: ", data.content[i].status_assunto);
      if(data.content[i].status_assunto !==  ""){
          data.content[i].status_assunto = "ATIVO"
      }
      else{
        data.content[i].status_assunto = "INATIVO"
      }
      console.log("Carregando Dado do subassunto: ", data.content[i].status_assunto);
      this.varSituacao = data.content[i].status_assunto
      }*/

      error: (error: any) => {
        console.error('Error:', error);
      }
    }}});
  }

  callSubAssunto() {}

  public toggleDropdown(item: Assunto) {

    console.log("Assunto: ", item);


    this.listAssunto.forEach(assunto => {
      if (assunto !== item) {
        assunto.isDropdownVisible = false;
      }
    });


    item.isDropdownVisible = !item.isDropdownVisible;



    if (item.isDropdownVisible) {

      this.assuntoService.getBySunAssunto(item.id_assunto).subscribe({
        next: (data: any) => {

          this.listSubAssunto = data.content;
          console.log("Data Sub", this.listSubAssunto);
        }
      })

      // this.assuntoService.getSubAssunto(item.id_assunto).subscribe({
      //   next: (data: SubAssuntos[]) => {
      //     console.log("SUB: ", data);
      //     this.listSubAssunto = data;
      //   },

      //   error: (error: any) => {
      //     console.error("Erro: ", error);
      //   }
      // });


    }
  }

  onEditClick(subAssunto: SubAssuntos){
    this.selectedSubAssunto = {...subAssunto};



  }
  onSubmit(){
    console.log("Dados Editado: ", this.selectedSubAssunto);
    this.selectedSubAssunto = null;
  }
  cancelEdit(){
    this.selectedSubAssunto = null;
  }
}
