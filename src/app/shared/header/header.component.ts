import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public background: boolean;
  public showMenu: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        switch (val.url) {
          case '/housing':
            this.background = true;
            break;
          case '/home':
            this.background = false;
            break;
        }
      }
      
  });
  }

  goTo(path) {
    this.router.navigate([path]);
    this.showMenu = false;
  }
}
