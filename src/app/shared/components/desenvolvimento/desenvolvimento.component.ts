import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-desenvolvimento',
  standalone: true,
  imports: [MatTabsModule, MatCardModule,],
  templateUrl: './desenvolvimento.component.html',
  styleUrl: './desenvolvimento.component.scss',
})
export class DesenvolvimentoComponent {}
