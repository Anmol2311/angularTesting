import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../interface/Employee';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { Photos } from '../interface/list';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolverService implements Resolve<Photos[]>{
  constructor(private empService:EmployeeService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photos[]> {
    return this.empService.getEmployees();
  }
}
