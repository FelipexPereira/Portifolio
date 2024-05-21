import { Routes } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CarrosselComponent } from './shared/components/carrossel/carrossel.component';

export const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: '', component: CarrosselComponent},
];
