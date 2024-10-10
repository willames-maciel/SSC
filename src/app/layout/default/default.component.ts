import { Component, } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [NavComponent, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'

})
export class DefaultComponent {


}
