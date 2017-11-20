import {trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
    return slideToLeft();
}


function slideToLeft() {
    return trigger('routerTransition', [
      state('void', style({position:'relative', width:'100%', overflow: 'hidden'}) ),
      state('*', style({position:'relative', width:'100%', overflow: 'hidden'}) ),
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease', style({transform: 'translateX(100%)'}))
      ])
    ]);
  }