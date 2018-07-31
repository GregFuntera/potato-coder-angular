import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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
  isDisplayHero: boolean = true;

  constructor(
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    // Particle JS
    this.particleSetup();
    // Breakpoints
    this.gridBreakpoint();
    this.heroImageBreakpoint();
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

  gridBreakpoint() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
  }

  onGridResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }

  heroImageBreakpoint() {
    this.breakpointObserver
      .observe(['(max-width: 530px)'])
      .subscribe(
          res => {
            if (res.matches) {
              this.isDisplayHero = false;
            } else {
              this.isDisplayHero = true;
            }
      });
  }

  scrollTo(target) {
    target.scrollIntoView({behavior: 'smooth'});
  }

}
