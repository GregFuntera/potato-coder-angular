import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
