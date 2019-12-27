import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interface/User';
import { cities, namePattern, emailPattern, mobilePattern, reactiveFormHead } from 'src/app/shared/constants/constants';
// import { User } from 'src/app/shared/interface/User';

@Component({
  selector: 'app-register-urf',
  templateUrl: './register-urf.component.html',
  styleUrls: ['./register-urf.component.scss']
})
export class RegisterUrfComponent implements OnInit {

  cities:string[];
  signup:FormGroup;
  user:User;
  title:string;
  @ViewChild('urfForm') myForm:ElementRef;
  constructor() { }

  ngOnInit() {
    this.title = reactiveFormHead;
    this.cities = cities
    this.signup = new FormGroup(
      {
        uname:new FormControl('',[Validators.required,Validators.pattern(namePattern)]),
        uemail:new FormControl('',[Validators.required,Validators.pattern(emailPattern)]),
        umobile:new FormControl('',[Validators.required,Validators.pattern(mobilePattern)]),
        ucity:new FormControl('',[Validators.required]),
        terms:new FormControl(false,[Validators.requiredTrue])
      }
    )
  }

  register(){
    this.user = this.signup.value;
    console.log(this.user);
    this.myForm.nativeElement.reset();
  }

}
