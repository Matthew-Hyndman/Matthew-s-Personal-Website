import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-black-jack-help',
  templateUrl: './black-jack-help.component.html',
  styleUrl: './black-jack-help.component.css'
})
export class BlackJackHelpComponent implements OnInit{

  constructor(private appService: AppService){

  }

  ngOnInit(): void {
    this.appService.setCurrentActiveRoute('Black Jack')
  }

}
