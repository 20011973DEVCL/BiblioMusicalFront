import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CantanteList } from './pages/cantante-list/cantante-list';
import { CantanteForm } from './pages/cantante-form/cantante-form';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: CantanteList },
  { path: 'nuevo', component: CantanteForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CantanteRoutingModule { }
