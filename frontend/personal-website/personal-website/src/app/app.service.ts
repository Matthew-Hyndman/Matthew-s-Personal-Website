import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit{

  pageHeader: Subject<String> = new Subject<String>();

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.publishInfo();
  }

  publishInfo(){
    this.pageHeader.next;
  }
}
