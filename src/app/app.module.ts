import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { ParticlesModule } from 'angular-particle';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './/app-routing.module';

// Pages/Components
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { ImagePopupComponent } from './pages/blog-view/components/image-popup/image-popup.component';

// Services
import { ImagePopupService } from './services/image-popup/image-popup.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogViewComponent,
    ImagePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ParticlesModule,
    FlexLayoutModule
  ],
  entryComponents: [
    ImagePopupComponent
  ],
  providers: [
    ImagePopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
