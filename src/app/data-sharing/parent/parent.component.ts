import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childMsg:string = "aaa";
  constructor() { }

  ngOnInit() {
 
  }

}
