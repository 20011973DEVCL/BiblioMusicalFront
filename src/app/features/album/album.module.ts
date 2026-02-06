import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumListComponent } from './pages/album-list/album-list.component';
import { AlbumFormComponent } from './pages/album-form/album-form.component';

@NgModule({
  declarations: [AlbumListComponent, AlbumFormComponent],
  imports: [SharedModule, AlbumRoutingModule],
})
export class AlbumModule {}
