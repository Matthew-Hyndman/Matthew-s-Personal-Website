import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'persoanl-website';

  pageHeader: String;

  constructor(
    private activeRoute: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.pageHeader.subscribe( (data) => {
      (this.pageHeader = data)
    })
  }

  getCurrentActiveRoute(): String {
    let theRoute = this.activeRoute.pathFromRoot.map.name;
    this.title = theRoute;

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
