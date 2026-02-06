import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing-module';
import { PaisList } from './pages/pais-list/pais-list';
import { PaisForm } from './pages/pais-form/pais-form';


@NgModule({
  declarations: [
    PaisList,
    PaisForm
  ],
  imports: [
    CommonModule,
    PaisRoutingModule
  ]
})
export class PaisModule { }
