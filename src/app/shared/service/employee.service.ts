import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL, employees } from '../constants/constants';
import { Employee } from '../interface/Employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photos } from '../interface/list';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  // getEmployees():Observable<Photos[]>{
  //   const url = `${baseURL}/${employees}`;
  //   return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos').pipe(
  //    map(res => {
  //      const data = res;
  //      return data;
  //    })
  //   )
  // }

  getEmployees():Observable<any>{
    const url = `${baseURL}/${employees}`;
    return this.http.get<Employee[]>(url);
  }

  createEmployee(emp:object){
    const url = `${baseURL}/${employees}`;
    return this.http.post(url,emp);
  }

  deleteEmployee(id:number){
    const url = `${baseURL}/${employees}/${id}`;
    return this.http.delete(url);
  }

  updateEmployee(emp:Employee){
    const url = `${baseURL}/${employees}/${emp.id}`;
    return this.http.put(url,JSON.stringify(emp));
  }
  
}
