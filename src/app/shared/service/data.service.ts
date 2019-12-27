import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('Default Message');
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message);
  }

  // private loginStatus = new BehaviorSubject(false);
  // currentStatus = this.loginStatus.asObservable();

  // changeLoginStatus(){
  //   this.loginStatus.next(!this.currentStatus);
  // }

}
