import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';
import { RotaService } from '../../services/toggle.service';

interface Item {
  route: string;
  icon: string;
  label: string;
}


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  sideBarOpen = false;



  itens: Item[] = [
    { route: '/app', icon: 'fa-solid fa-house-chimney', label: 'Início' },
    { route: '/app/attendant-results', icon: 'fa-solid fa-headphones', label: 'Atendimentos' },
    { route: '/app/occurrences', icon: 'fa-solid fa-circle-exclamation', label: 'Ocorrência' },
    { route: '/app/absences', icon: 'fa-solid fa-user-slash', label: 'Ausências' },
    { route: '/app/bank-hours', icon: 'fa-solid fa-hourglass-half', label: 'Banco de Horas' },
    { route: '/app/delays', icon: 'fa-regular fa-clock', label: 'Atraso' },
    { route: '/app/reports', icon: 'fa-solid fa-chart-simple', label: 'Relatório e Estatística' },
    { route: '/app/complaints', icon: 'fa-solid fa-gear', label: 'Reclamação' },
    { route: '/app/compliments', icon: 'fa-solid fa-gear', label: 'Elogios' },
    { route: '/app/general-goal', icon: 'fa-solid fa-gear', label: 'Meta Geral' },
    { route: '/app/matters', icon: 'fa-solid fa-gear', label: 'Assuntos' },
    { route: '/app/sub-matters', icon: 'fa-solid fa-gear', label: 'Sub Assuntos' },
    { route: '/app/users', icon: 'fa-solid fa-gear', label: 'Usuários' }
  ];


  toggleSideBar() {
    this.sideBarOpen = !this.sideBarOpen;
    if (this.sideBarOpen) {
      document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
    } else {
      document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');

    }
  }



}
