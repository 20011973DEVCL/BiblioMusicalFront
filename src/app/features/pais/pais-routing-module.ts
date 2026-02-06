import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisList } from './pages/pais-list/pais-list';
import { PaisForm } from './pages/pais-form/pais-form';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: PaisList },
  { path: 'nuevo', component: PaisForm },
  { path: 'editar/:id', component: PaisForm },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
