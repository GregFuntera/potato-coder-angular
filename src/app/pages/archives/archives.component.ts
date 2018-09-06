import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../services/blog/blog.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  archives: any[] = [];

  constructor(private blogSvc: BlogService) {
      //
    }

  ngOnInit() {
    this.loadArchives();
  }

  loadArchives() {
    this.blogSvc.getBlogArchives().subscribe(
      data => {
        this.archives = data;
        console.log(this.archives);
    });
  }
}
