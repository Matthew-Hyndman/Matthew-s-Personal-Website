import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  pageHeader: BehaviorSubject<string> = new BehaviorSubject<string>('Welcome');

  constructor() { }

  setCurrentActiveRoute(thePageHeader: string) {
    this.pageHeader.next(thePageHeader);
    //console.log(`pageHeader (service): ${this.pageHeader}`);
  }
}
