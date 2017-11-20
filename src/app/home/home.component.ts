import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { Router } from '@angular/router';
import { routerTransition } from '../core/animations/router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public carouselOne: NgxCarousel;

  constructor(private route: Router) { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 900,
      point: {
        visible: true,
        pointStyles: 
        `.ngxcarouselPoint {
          list-style-type: none;
          text-align: center;
          padding: 12px;
          margin: 0;
          white-space: nowrap;
          overflow: auto;
          position: absolute;
          width: 100%;
          bottom: 0px;
          left: 0;
          z-index: 1000;
          box-sizing: border-box;
        }
        .ngxcarouselPoint li {
          display: inline-block;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.55);
          padding: 4px;
          margin: 0 5px;
          transition: .4s ease all;
        }
        .ngxcarouselPoint li.active {
            background: white;
            width: 3px;
        }
        @media (min-width: 768px) {
          .ngxcarouselPoint {
            display: none;
          }
        }
      }`
      },
      load: 2,
      touch: true,
      custom: 'banner'
    }
  }
  public myfunc(event: Event) {
 }

 goTo(path) {
    this.route.navigate([path]);
 }
}
