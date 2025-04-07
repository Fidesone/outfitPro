import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { BotonLoginComponent } from './boton-login/boton-login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OutfitPro';
}
