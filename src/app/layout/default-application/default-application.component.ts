import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../components/side-bar/side-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from '../../components/header/header.component';
import { EventEmitterService } from '../../services/event-emitter';
import { CommonModule } from '@angular/common';
import { AfterViewInit } from '@angular/core';
import { Inject } from '@angular/core';



@Component({
  selector: 'app-default-application',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, FooterComponent, SidebarComponent, CommonModule, HeaderComponent],
  templateUrl: './default-application.component.html',
  styleUrl: './default-application.component.scss'
})


export class DefaultApplicationComponent  {


  isActive: boolean = false;

  alerta(event: any) {
    console.log('alerta', event);
    this.isActive = event;
    console.log('ola');

  }
}
