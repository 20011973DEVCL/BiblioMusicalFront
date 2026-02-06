import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


import { PaisList } from './pages/pais-list/pais-list';
import { PaisForm } from './pages/pais-form/pais-form';
import { PaisRoutingModule } from './pais-routing-module';

@NgModule({
  declarations: [PaisList, PaisForm],
  imports: [SharedModule, PaisRoutingModule],
})
export class PaisModule {}
