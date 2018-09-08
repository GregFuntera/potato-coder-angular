import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { ParticlesModule } from 'angular-particle';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DisqusModule } from 'ngx-disqus';

// Pages/Components
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { ArchivesComponent } from './pages/archives/archives.component';
import { BlogBodyComponent } from './pages/blog-view/blog-body/blog-body.component';
// Services
import { ImagePopupService } from './services/image-popup/image-popup.service';
import { BlogService } from './services/blog/blog.service';
import { MessageService } from './services/message/message.service';
import { MessageHandlerComponent } from './components/message-handler/message-handler.component';
// Pipes
import { InnerHtmlPipe } from './pipes/inner-html/inner-html.pipe';
import { PageLoaderComponent } from './_includes/page-loader/page-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogViewComponent,
    MessageHandlerComponent,
    InnerHtmlPipe,
    BlogListComponent,
    ArchivesComponent,
    BlogBodyComponent,
    PageLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ParticlesModule,
    FlexLayoutModule,
    HttpClientModule,
    DisqusModule.forRoot('pcodertech')
  ],
  entryComponents: [],
  providers: [
    ImagePopupService,
    BlogService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
