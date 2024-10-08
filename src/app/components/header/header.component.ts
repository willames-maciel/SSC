import { Component, input, Input, OnInit } from '@angular/core';
import { SidebarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { EventEmitterService } from '../../services/event-emitter';
import { EventEmitter } from 'events';
import { routes } from '../../app.routes';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{
  @Input() itens: any[] = [];
  selectedItem: any;
  title: any;
  x = true;


constructor(){


}


ngOnInit() {


  EventEmitterService.get("nameheader").subscribe(data => {this.title =  data.label, console.log("Titulo: ", data)});
}





  /* constructor(private eventEmitterService: EventEmitterService) {
    this.eventEmitterService.get('itensChange').subscribe((label: string) => {
      this.selectedItem = { label };
    });
  }

   ngOnInit(): void {
    this.eventEmitterService.get('itensChange').subscribe((label: string) => {
      this.selectedItem = { label };
    });
  }*/

}
