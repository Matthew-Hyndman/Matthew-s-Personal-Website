import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrl: './site-info.component.css'
})
export class SiteInfoComponent implements OnInit{

  constructor(private appService: AppService){

  }
  ngOnInit(): void {
    this.appService.setCurrentActiveRoute('About');
  }

}
