import { Component } from '@angular/core';
import { NavLinks } from '../../common/nav-links';
import { LinkObj } from '../../common/link-obj';

@Component({
    selector: 'app-mini-nav-menu',
    templateUrl: './mini-nav-menu.component.html',
    styleUrl: './mini-nav-menu.component.css',
    standalone: false
})
export class MiniNavMenuComponent {
  sidebarActive = true;

  links!: LinkObj[];

  constructor(private navLinks: NavLinks) {
    this.links = this.navLinks.links;
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  selectedLink() {
    this.sidebarActive = true;
  }
}
