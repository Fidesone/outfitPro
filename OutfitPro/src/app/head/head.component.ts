import { Component } from '@angular/core';
import { BotonComponent } from '../boton/boton.component';
import { BotonLoginComponent } from '../boton-login/boton-login.component';

@Component({
  selector: 'app-head',
  imports: [BotonLoginComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

}
