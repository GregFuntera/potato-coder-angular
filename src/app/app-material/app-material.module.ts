import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
