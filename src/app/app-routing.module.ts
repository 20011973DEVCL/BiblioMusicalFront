import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './layout/shell/shell.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },

      // ALBUM (si tu archivo es album.module.ts, esto está OK)
      {
        path: 'album',
        loadChildren: () =>
          import('./features/album/album.module').then(m => m.AlbumModule),
      },

      // CANCIONES
      {
        path: 'canciones',
        loadChildren: () =>
          import('./features/canciones/canciones-module').then(m => m.CancionesModule),
      },

      // CANTANTE
      {
        path: 'cantante',
        loadChildren: () =>
          import('./features/cantante/cantante-module').then(m => m.CantanteModule),
      },

      // GENERO MUSICAL
      {
        path: 'genero-musical',
        loadChildren: () =>
          import('./features/genero-musical/genero-musical-module').then(m => m.GeneroMusicalModule),
      },

      // PAIS
      {
        path: 'pais',
        loadChildren: () =>
          import('./features/pais/pais-module').then(m => m.PaisModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
