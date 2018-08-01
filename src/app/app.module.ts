import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { ParticlesModule } from 'angular-particle';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Pages/Components
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { ImagePopupComponent } from './pages/blog-view/components/image-popup/image-popup.component';

// Services
import { ImagePopupService } from './services/image-popup/image-popup.service';
import { BlogService } from './services/blog/blog.service';
import { MessageService } from './services/message/message.service';
import { MessageHandlerComponent } from './components/message-handler/message-handler.component';
// Pipes
import { InnerHtmlPipe } from './pipes/inner-html/inner-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogViewComponent,
    ImagePopupComponent,
    MessageHandlerComponent,
    InnerHtmlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ParticlesModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  entryComponents: [
    ImagePopupComponent
  ],
  providers: [
    ImagePopupService,
    BlogService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
