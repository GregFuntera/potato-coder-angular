import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import { MOCK } from './shared/mock';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngAfterViewInit() {
     // Image Pop-up Modals
     this.showImageModal();
  }

  ngOnInit() {
    // console.log(MOCK.body);
    this.blogArticle = this.sanitizer.bypassSecurityTrustHtml(MOCK.body);
    this.gridBreakpoint();

  }

  gridBreakpoint() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 4;
    this.gridColSpan = (this.breakpoint === 1) ? 1 : 2;
    console.log('cols: '+ this.breakpoint, 'colspan: ' + this.gridColSpan);
  }

  onGridResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 4;
    this.gridColSpan = (this.breakpoint === 1) ? 1 : 2;
    console.log('cols: '+ this.breakpoint, 'colspan: ' + this.gridColSpan);
  }

  showImageModal() {
    const documentRef = this.blogContent.nativeElement;
    let imgs = documentRef.getElementsByTagName('img');
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].onclick = () => {
        console.log('image src:', imgs[i].src);
      };
    }
    // imgs.forEach((img, index) => {
    //   img.onclick = () => {
    //       console.log('clicked', index);
    //   };
    // });
  }

}
