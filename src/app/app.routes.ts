import { Routes } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CarrosselComponent } from './shared/components/carrossel/carrossel.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path: 'projetos', component: CarrosselComponent},
  {path: '', component: HomeComponent},
];
