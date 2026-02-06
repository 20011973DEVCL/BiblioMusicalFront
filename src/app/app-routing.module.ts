import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'album/listar', pathMatch: 'full' },
      {
        path: 'album',
        loadChildren: () =>
          import('./features/album/album.module').then(m => m.AlbumModule),
      },
      // Comentar hasta que existan:
      // { path: 'canciones', loadChildren: () => import('./features/canciones/canciones.module').then(m => m.CancionesModule) },
      // { path: 'cantante', loadChildren: () => import('./features/cantante/cantante.module').then(m => m.CantanteModule) },
      // { path: 'genero-musical', loadChildren: () => import('./features/genero-musical/genero-musical.module').then(m => m.GeneroMusicalModule) },
      // { path: 'pais', loadChildren: () => import('./features/pais/pais.module').then(m => m.PaisModule) },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
