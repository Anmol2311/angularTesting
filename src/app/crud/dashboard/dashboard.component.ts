import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/service/employee.service';
// import { User } from 'src/app/shared/interface/User';
import { Employee } from 'src/app/shared/interface/Employee';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Photos } from 'src/app/shared/interface/list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  employees: Photos[];
  constructor(private emp: EmployeeService, private router: Router,private titleService:Title,private route:ActivatedRoute) { 
    this.fetchEmployees();
  }

  ngOnInit() {
    // this.fetchEmployees()
    // console.log(this.router.url);
    this.titleService.setTitle('Dashboard');
  }

  fetchEmployees() {
    // this.emp.getEmployees().subscribe(
    //   res => this.employees = res
    // )
    this.employees = this.route.snapshot.data['empList'];
    console.log(this.employees);
  }
  deleteEmp(emp:Employee) {
    if (confirm(`${'Are you sure you want to delete'} ${emp.uname} ?`)) {
      this.emp.deleteEmployee(emp.id).subscribe(
        () => this.fetchEmployees()
      )
    }
  }

  edit(id:number){
    this.router.navigate(['crud-operation/edit-employee',id]);
  }
}
