import { Component, OnInit, ViewChild } from '@angular/core';
import { editEmployeeFormHead, cities, editBtn } from 'src/app/shared/constants/constants';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { Employee } from 'src/app/shared/interface/Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  title: string;
  btnName:string;
  cities: string[];
  employees: Employee[];
  emps: Employee[];
  id: number;
  empObj: Employee;
  @ViewChild('utdForm') myForm:NgForm;
  constructor(private emp: EmployeeService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.title = editEmployeeFormHead;
    this.btnName = editBtn;
    this.cities = cities;
    this.route.params.subscribe(
      params => this.id = params['id']
    )
    this.emp.getEmployees().subscribe(
      res => {
        this.employees = res;
        this.emps = this.employees.filter(
          (emp) => {
            return emp.id == this.id
          }
        )
        this.empObj = this.emps[0];
        console.log(this.empObj);
      }
    )
  }

  editEmployee(data: any) {
    const currentEmp = {
      id: this.id,
      uname: data.uname,
      uemail: data.uemail,
      umobile: data.umobile,
      ucity: data.ucity,
      terms: data.terms
    }
    this.emp.updateEmployee(currentEmp).subscribe(
      () => {
        alert('Updated Successfully!')
        this.myForm.reset();
        this.router.navigate(['/crud-operation/dashboard']);
      }
    )
  }

}
