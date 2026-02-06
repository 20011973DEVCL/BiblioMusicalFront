import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumList } from './pages/album-list/album-list';
import { AlbumForm } from './pages/album-form/album-form';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: AlbumList },
  { path: 'nuevo', component: AlbumForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
