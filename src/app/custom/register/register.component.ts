import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { cities } from 'src/app/shared/constants/constants';
import { User } from 'src/app/shared/interface/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() title:string;
  cities:string[];
  @Output() registerEvent = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.cities = cities;
  }

  register(frm:User){
    // console.log(frm);
    this.registerEvent.emit(frm);
  }

 

}
