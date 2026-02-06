import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancionesRoutingModule } from './canciones-routing-module';
import { CancionesList } from './pages/canciones-list/canciones-list';
import { CancionesForm } from './pages/canciones-form/canciones-form';


@NgModule({
  declarations: [
    CancionesList,
    CancionesForm
  ],
  imports: [
    CommonModule,
    CancionesRoutingModule
  ]
})
export class CancionesModule { }
