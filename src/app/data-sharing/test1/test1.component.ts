import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  message:string;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(
      msg => this.message = msg
    )
  }

  newMessage() {
    this.data.changeMessage('Hello from Test1');
  }

}
