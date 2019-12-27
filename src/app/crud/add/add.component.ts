import { Component, OnInit, ViewChild } from '@angular/core';
import { cities, addEmployeeFormHead, addBtn } from 'src/app/shared/constants/constants';
import { Employee } from 'src/app/shared/interface/Employee';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interface/User';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  cities:string[];
  title:string;
  btnName:string;
  // @ViewChild('utdForm') myForm:NgForm;
  constructor(private emp:EmployeeService,private router:Router,private titleService:Title,private meta:Meta) { }

  ngOnInit() {
    this.cities = cities;
    this.title = addEmployeeFormHead;
    this.btnName = addBtn;
    this.titleService.setTitle('Add Employee');
    
  }

  addEmployee(data:User){
    const empObj = {
      uname:data.uname,
      uemail:data.uemail,
      umobile:data.umobile,
      ucity:data.ucity,
      terms:data.terms
    }
    this.emp.createEmployee(empObj).subscribe(
      () => {
        alert('Added Successfully!')
        // this.myForm.reset();
        this.router.navigate(['/crud-operation/dashboard']);
      }
    )
  }

}
