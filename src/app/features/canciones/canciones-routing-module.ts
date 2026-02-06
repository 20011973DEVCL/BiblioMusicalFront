import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionesList } from './pages/canciones-list/canciones-list';
import { CancionesForm } from './pages/canciones-form/canciones-form';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: CancionesList },
  { path: 'nuevo', component: CancionesForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancionesRoutingModule {}
