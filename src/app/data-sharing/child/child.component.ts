import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() parentMsg:string;
  @Output() childEmmiter = new EventEmitter();
  title:string = "Anmol Chaware";
  constructor() { }

  ngOnInit() {
  }
  
  sendParent(msg){
    this.childEmmiter.emit(msg);
  }
}
