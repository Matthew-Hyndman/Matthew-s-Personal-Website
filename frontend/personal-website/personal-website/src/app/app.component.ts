import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'personal-website';

  pageHeader = '';
  
  constructor (private appService: AppService){}
  ngOnInit(): void {
    this.pageHeader = this.appService.pageHeader.value
    //console.log(`pageHeader (component): ${this.pageHeader}`);
  }
}
