import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/interface/User';
import { NgForm } from '@angular/forms';
import { cities, templateDrivenFormHead } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-register-utd',
  templateUrl: './register-utd.component.html',
  styleUrls: ['./register-utd.component.scss']
})
export class RegisterUtdComponent implements OnInit {

  cities: string[];
  user: User;
  title:string;
  @ViewChild('utdForm') myForm: NgForm;

  constructor() { }

  ngOnInit() {
    this.title = templateDrivenFormHead;
    this.cities = cities
    this.user = new User({ uname: '', uemail: '', umobile: '', ucity: '', terms: false });
  }

  register(value: User) {
    this.user = value;
    this.myForm.reset();
    this.myForm.form.controls.ucity.setValue('');
    console.log(this.user);
  }

}
