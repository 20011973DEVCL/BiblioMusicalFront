import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [SharedModule, RouterModule],
  exports: [ShellComponent],
})
export class LayoutModule {}
