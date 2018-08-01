import {
  ComponentPortal,
  // This import is only used to define a generic type. The current TypeScript version incorrectly
  // considers such imports as unused (https://github.com/Microsoft/TypeScript/issues/14953)
  // tslint:disable-next-line:no-unused-variable
  Portal,
  TemplatePortalDirective
} from '@angular/cdk/portal';

import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ActivatedRoute } from '@angular/router';
// Components
import { ImagePopupComponent } from './components/image-popup/image-popup.component';
// Services
import { ImagePopupService } from '../../services/image-popup/image-popup.service';
import { BlogService } from './../../services/blog/blog.service';
// Mockups
import { MOCK } from '../../mocks/mock-blog-view.mock';
// Models
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogViewComponent implements OnInit, AfterViewInit {
  @ViewChild('blogContent') blogContent: ElementRef;

  breakpoint: number;
  gridColSpan: number;
  blogArticle: any;
  blog$: any;

  constructor(
    private route: ActivatedRoute,
    private overlay: Overlay,
    private imgPopupSvc: ImagePopupService,
    private blogSvc: BlogService,
  ) { }

  ngAfterViewInit() {
    // Image Pop-up Modals
    /**
     * TODO:
     * Add Image zoom-in
    */
    //  this.loadImages();
  }

  ngOnInit() {
    let blogID = this.route.snapshot.paramMap.get('blogid');
    this.loadBlog(blogID);
    //
    this.gridBreakpoint();
  }

  loadBlog(blogID) {
    this.blogSvc.getBlog(blogID).subscribe(
      res => {
        this.blog$ = res;
        // console.log('Blog article: ', this.blog$);
      });
  }

  gridBreakpoint() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 4;
    this.gridColSpan = (this.breakpoint === 1) ? 1 : 2;
    // console.log('cols: '+ this.breakpoint, 'colspan: ' + this.gridColSpan);
  }

  onGridResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 4;
    this.gridColSpan = (this.breakpoint === 1) ? 1 : 2;
    // console.log('cols: '+ this.breakpoint, 'colspan: ' + this.gridColSpan);
  }

  loadImages() {
    const documentRef = this.blogContent.nativeElement;
    let imgs = documentRef.getElementsByTagName('img');
    this.onClickImage(imgs);
  }

  onClickImage(imgs) {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].onclick = () => {
        this.showImageOverlay(imgs[i]);
      };
    }
  }

  showImageOverlay(img) {
    this.imgPopupSvc.changeImage(new Image(img));

    let config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);
    const imagePopup = new ComponentPortal(ImagePopupComponent);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
    overlayRef.attach(imagePopup);
  }

}
