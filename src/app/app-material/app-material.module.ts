import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
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
    MatListModule,
    OverlayModule
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
    MatListModule,
    OverlayModule
  ]
})
export class AppMaterialModule { }
