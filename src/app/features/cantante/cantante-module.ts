import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CantanteRoutingModule } from './cantante-routing-module';
import { CantanteList } from './pages/cantante-list/cantante-list';
import { CantanteForm } from './pages/cantante-form/cantante-form';


@NgModule({
  declarations: [
    CantanteList,
    CantanteForm
  ],
  imports: [
    CommonModule,
    CantanteRoutingModule
  ]
})
export class CantanteModule { }
