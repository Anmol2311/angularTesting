import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  nature:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XDZ1Mg1NnikI87YVZTc0CSmpVuqDDv9sJ1cIiJ18z3V10L2aIg";
  bird:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4Y_m6SbMztUGALvkh5HQ5lMzuxVPY4Bu6YGmsL8PrV9i8_gDIw";

  imgPath:string;
  imgName:string;
  toggle:boolean;
  title:string = "Anmol";
  constructor(private titleService:Title) { }

  ngOnInit() {
    this.imgName = "Bird";
    this.imgPath = this.bird;
    this.titleService.setTitle('Data-Binding');
  }

  changeImage(){
    this.toggle = !this.toggle;
    if(this.toggle){
      this.imgName = "Nature";
      this.imgPath = this.nature;
    }
    else{
      this.imgName = "Bird";
      this.imgPath = this.bird;
    }
  }

}
