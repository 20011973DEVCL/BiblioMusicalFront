import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './pages/album-list/album-list.component';
import { AlbumFormComponent } from './pages/album-form/album-form.component';

const routes: Routes = [
  { path: 'listar', component: AlbumListComponent },
  { path: 'nuevo', component: AlbumFormComponent },
  { path: ':id/editar', component: AlbumFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
