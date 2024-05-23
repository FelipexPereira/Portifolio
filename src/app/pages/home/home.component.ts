import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { CarrosselComponent } from '../../shared/components/carrossel/carrossel.component';
import { DesenvolvimentoComponent } from '../../shared/components/desenvolvimento/desenvolvimento.component';
import { MatCardModule } from '@angular/material/card';
import { WelcomeComponent } from '../../shared/components/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    CarrosselComponent,
    DesenvolvimentoComponent,
    WelcomeComponent,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
