import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/service/list.service';
import { Car, Bike } from 'src/app/shared/interface/list';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  cars:Car[];
  bikes:Bike[];
  priceList:number[] = [5000000,4500000,2000000,1500000,104000,115000,190000,225000];
  isCars:boolean = true;
  choice:object = {};
  myStyle:object;
  isStyle:boolean;
  myClass:string;
  constructor(private list:ListService) { }

  ngOnInit() {
    this.myStyle = {
      fontSize:"20px",
      color:"#dc3545"
    }
    this.myClass = "menu-title-red";
    this.fetchList();
  }

  fetchList(){
    this.list.getCarList().subscribe(
      res => {
        this.cars = res;
        console.log(this.cars);
      }
    );
    this.list.getBikeList().subscribe(
      res => {
        this.bikes = res;
        console.log(this.bikes);
      }
    )
  }
  showCarList(){
    this.isCars = true;
  }

  showBikeList(){
    this.isCars = false;
  }

  getItem(item:object){
    this.choice = item;
  }

  changeStyle(){
    this.isStyle = !this.isStyle;
    this.myStyle = {
      fontSize:this.isStyle?"16px":"20px",
      color:this.isStyle?"#007bff":"#dc3545"
    }
  }

  changeClass(){
    if(this.myClass == 'menu-title-red'){
      this.myClass = 'menu-title-blue';
    }
    else{
      this.myClass = 'menu-title-red';
    }
  }
}
