import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlackJackHelpService {

  /*isAgreedToTermsAndConditions: Observable<boolean> = new Observable<boolean>( data => {
    data.next(false);
  });*/
  storage: Storage = sessionStorage;

  constructor() { 
    
  }

  isHasUserAgreedToDisclaimerTrue(): boolean{
  return this.storage.getItem('hasUserAgreedToDisclaimer') == "true";
   
  }
}
