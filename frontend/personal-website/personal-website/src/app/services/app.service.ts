import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  pageHeader = '';

  constructor(private activeRoute: ActivatedRoute) { }

  getCurrentActiveRoute(): String {
    let theRoute = this.activeRoute.pathFromRoot.map.name;

    console.log(`the route ${theRoute}`);

    switch (theRoute) {
      case 'landing':
        this.pageHeader = 'Welcome';
        break;
      case 'about':
        this.pageHeader = 'About';
        break;
      case 'black-jack':
        this.pageHeader = 'Black Jack';
        break;
      default:
        return 'error';
    }

    return this.pageHeader;  
  }
}
