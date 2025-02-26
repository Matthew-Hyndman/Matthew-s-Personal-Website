import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlackJackHelpService {
  private readonly platformId = inject(PLATFORM_ID);

  storage: Storage = sessionStorage;

  constructor() {}

  isHasUserAgreedToDisclaimerTrue(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return this.storage?.getItem('hasUserAgreedToDisclaimer') == 'true';
    }

    return false;
  }

  isHasUserAgreedToDisclaimerNull(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return this.storage?.getItem('hasUserAgreedToDisclaimer') != null;
    }

    return false;
  }
}
