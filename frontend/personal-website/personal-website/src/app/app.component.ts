import { Component } from '@angular/core';
import { LinkObj } from './common/link-obj';
import { NavLinks } from './common/nav-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'personal-website';
  links!: LinkObj[];

  constructor (private navLinks: NavLinks){
    this.links = this.navLinks.links;
  }
  
  

}
