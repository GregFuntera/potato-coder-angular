import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-body',
  templateUrl: './blog-body.component.html',
  styleUrls: ['./blog-body.component.scss']
})
export class BlogBodyComponent implements OnInit {
  @Input() body: string;
  @Input() blogID: string;

  IDENTIFIER = '/blog/' + this.blogID;

  constructor() { }

  ngOnInit() {
  }

}
