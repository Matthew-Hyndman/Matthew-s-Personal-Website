import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'personal-website';

  pageHeader = '';

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getCurrentActiveRoute();
  }

  

}
