import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-black-jack-help',
  templateUrl: './black-jack-help.component.html',
  styleUrl: './black-jack-help.component.css'
})
export class BlackJackHelpComponent implements OnInit{

  isAgreedToTermsAndConditions: boolean = false;

  //storage: Storage = localStorage;


  constructor(private router: Router){
    /*
    let data = this.storage.getItem('hasUserAgreedToDisclaimer');

    if(data != null){
      if (data == 'true') {
        router.navigate(['black-jack-game']);
      }
    }
      */
  }

  ngOnInit(): void {
    
  }

  setIsAgreedToTermsAndConditions(event : any){
    this.isAgreedToTermsAndConditions = event.target.checked;
    //this.storage.setItem('hasUserAgreedToDisclaimer', String(this.isAgreedToTermsAndConditions));
  }
}
