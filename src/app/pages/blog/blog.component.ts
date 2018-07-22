import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  // Particle JS
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
  height: number = 50;
  // Responsive Grid
  breakpoint: number;

  constructor() { }

  ngOnInit() {
    // Particle JS
    this.particleSetup();
    this.gridBreakpoint();
  }

  gridBreakpoint() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
  }

  onGridResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }

  particleSetup () {
    this.myStyle = {
      'position': 'initial',
      'width': '100%',
      'height': '150%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'padding-top': '50px',
    };

    this.myParams = {
      particles: {
        number: {
            value: 300,
        },
        color: {
            value: ['#00B7FF', '#ffffff', '#27cf1c']
        },
        shape: {
            type: 'circle',
        },
        line_linked: {
          enable: false,
        },
      }
    };
  }

}
