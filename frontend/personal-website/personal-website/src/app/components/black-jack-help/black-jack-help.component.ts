import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlackJackHelpService } from '../../services/black-jack-help.service';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-black-jack-help',
  templateUrl: './black-jack-help.component.html',
  styleUrl: './black-jack-help.component.css',
})
export class BlackJackHelpComponent implements OnInit {

  showErrorMessage = false

  storage: Storage = sessionStorage;

  formGroup!: FormGroup;

  constructor(
    private router: Router,
    private blackJackHelpService: BlackJackHelpService, 
    private formBuilder: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      disclaimer: [false, Validators.requiredTrue]
    });
  }

  get disclaimer() { return this.formGroup.get('disclaimer'); }
  //set disclaimer(accepted: boolean) {this.formGroup.setValue({ disclaimer: accepted}); }

  setIsAgreedToTermsAndConditions(event: any) {
    let accepted = event.target.checked;
    this.storage.setItem(
      'hasUserAgreedToDisclaimer',
      String(accepted)
    );
    this.formGroup.setValue({disclaimer: accepted});
  }

  onContinue() {
    if(this.blackJackHelpService.isHasUserAgreedToDisclaimerTrue() && this.disclaimer?.value){
      this.router.navigate(['black-jack-game']);
    } else {
      this.showErrorMessage = true;
    }
  }
}
