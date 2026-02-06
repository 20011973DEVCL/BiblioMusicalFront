import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumList } from './pages/album-list/album-list';
import { AlbumForm } from './pages/album-form/album-form';

@NgModule({
  declarations: [AlbumList, AlbumForm],
  imports: [SharedModule, AlbumRoutingModule]
})
export class AlbumModule {}
