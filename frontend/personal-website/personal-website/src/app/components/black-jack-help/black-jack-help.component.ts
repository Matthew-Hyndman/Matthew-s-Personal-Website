import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-jack-help',
  templateUrl: './black-jack-help.component.html',
  styleUrl: './black-jack-help.component.css'
})
export class BlackJackHelpComponent implements OnInit{

  isAgreedToTermsAndConditions: boolean = false;

  constructor(){

  }

  ngOnInit(): void {
  }

  setIsAgreedToTermsAndConditions(event : any){
    this.isAgreedToTermsAndConditions = event.target.checked;
  }
}
