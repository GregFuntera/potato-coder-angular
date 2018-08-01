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
  MatListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
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
    OverlayModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
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
    OverlayModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ]
})
export class AppMaterialModule { }
