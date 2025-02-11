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
  //isAgreedToTermsAndConditions_assist_var: boolean = false;

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
      disclaimer: [this.blackJackHelpService.isHasUserAgreedToDisclaimerTrue(), Validators.requiredTrue]
    });
  }

  get disclaimer() { return this.formGroup.get('disclaimer'); }

  setIsAgreedToTermsAndConditions(event: any) {
    this.storage.setItem(
      'hasUserAgreedToDisclaimer',
      String(event.target.checked)
    );
  }

  onContinue() {
    if(this.blackJackHelpService.isHasUserAgreedToDisclaimerTrue() && this.disclaimer){
      this.router.navigate(['black-jack-game']);
    } 
  }
}
