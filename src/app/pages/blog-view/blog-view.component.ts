import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  panelOpenState = true;

  constructor() { }

  ngOnInit() {
  }

}
