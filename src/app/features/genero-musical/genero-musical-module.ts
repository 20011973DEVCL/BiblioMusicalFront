import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneroMusicalRoutingModule } from './genero-musical-routing-module';
import { GeneroMusicalList } from './pages/genero-musical-list/genero-musical-list';
import { GeneroMusicalForm } from './pages/genero-musical-form/genero-musical-form';


@NgModule({
  declarations: [
    GeneroMusicalList,
    GeneroMusicalForm
  ],
  imports: [
    CommonModule,
    GeneroMusicalRoutingModule
  ]
})
export class GeneroMusicalModule { }
