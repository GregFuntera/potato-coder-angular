import {
  ComponentPortal,
  // This import is only used to define a generic type. The current TypeScript version incorrectly
  // considers such imports as unused (https://github.com/Microsoft/TypeScript/issues/14953)
  // tslint:disable-next-line:no-unused-variable
  Portal,
  TemplatePortalDirective
} from '@angular/cdk/portal';

import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../services/blog/blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogViewComponent implements OnInit {

  blog$: any;
  blogID: string;

  constructor(
    private route: ActivatedRoute,
    private blogSvc: BlogService) {
      //
    }

  ngOnInit() {
    this.blogID = this.route.snapshot.paramMap.get('blogid');
    this.loadBlog(this.blogID);
  }

  loadBlog(blogID) {
    this.blogSvc.getBlog(blogID).subscribe(
      res => {
        this.blog$ = res;
        // console.log('Blog article: ', this.blog$);
      });
  }
}
