import { Component, OnInit } from '@angular/core';
import { BlackJackHelpService } from '../../services/black-jack-help.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    standalone: false
})
export class LandingComponent implements OnInit {
  blckJackGameRoute: string = '';

  constructor(private blackJackHelpService: BlackJackHelpService) {}

  ngOnInit(): void {

    if (this.blackJackHelpService.isHasUserAgreedToDisclaimerNull()) {
      if (this.blackJackHelpService.isHasUserAgreedToDisclaimerTrue()) {
        this.blckJackGameRoute = '/black-jack-game';
        return
      }
    } 
      this.blckJackGameRoute = '/black-jack-help';
    
  }
}
