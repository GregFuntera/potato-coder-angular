import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../services/blog/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: any[] = [];

  constructor(private blogSvc: BlogService) { }

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.blogSvc.getBlogs().subscribe(
      data => {
        this.blogs = data;
        console.log(this.blogs);
    });
  }
}
