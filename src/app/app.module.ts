import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
