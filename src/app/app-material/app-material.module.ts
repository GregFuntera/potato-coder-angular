import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule
  ]
})
export class AppMaterialModule { }
