import { Component, OnInit } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';



@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title: string = "Angular Application";
  price: number = 50;
  employee: object = {
    name: 'Anmol Chaware',
    post: 'Software Developer'
  }
  num: number = 5.5678;
  today: object;
  marks: number[] = [50, 45, 74, 35, 31, 1, 9, 11];
  employees: string[] = ['Madhav', 'Dipali', 'Suyog', 'Anmol'];
  constructor() { }

  ngOnInit() {
    this.today = new Date;

  }

}
