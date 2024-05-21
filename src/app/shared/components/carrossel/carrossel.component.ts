import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [MatTabsModule, MatCardModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss',
})
export class CarrosselComponent {}
