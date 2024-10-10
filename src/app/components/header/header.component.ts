import { Component, input, Input, OnInit } from '@angular/core';
import { SidebarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { EventEmitterService } from '../../services/event-emitter';
import { EventEmitter } from 'events';
import { routes } from '../../app.routes';
import { Inject } from '@angular/core';
import { RotaService } from '../../services/toggle.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { filter, map, switchMap } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  title: string = "";



  constructor(activatedRoute: ActivatedRoute, router: Router, rotaService: RotaService) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      .pipe(switchMap((route) => route.data))

      .subscribe((event) => {
        this.title = event['titulo'];
      });
  }





}
