import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneroMusicalList } from './pages/genero-musical-list/genero-musical-list';
import { GeneroMusicalForm } from './pages/genero-musical-form/genero-musical-form';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: GeneroMusicalList },
  { path: 'nuevo', component: GeneroMusicalForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneroMusicalRoutingModule { }
