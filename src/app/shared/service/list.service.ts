import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Car, Bike } from '../interface/list';
import { baseURL, cars, bikes } from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  getCarList(){
    const url = `${baseURL}/${cars}`;
    return this.http.get<Car[]>(url);
  }

  getBikeList(){
    const url = `${baseURL}/${bikes}`;
    return this.http.get<Bike[]>(url);
  }

}
