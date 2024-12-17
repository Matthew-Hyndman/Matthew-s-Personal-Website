import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

constructor(private appService: AppService){

}

  ngOnInit(): void {
    this.appService.setCurrentActiveRoute('Welcome');
  }

}
