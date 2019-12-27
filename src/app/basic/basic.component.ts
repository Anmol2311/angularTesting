import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  currentURL = "";
  public href: string = "";
  constructor(private titleService:Title,private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('Basic Module');
    // this.router.events.subscribe((url:any) => console.log(url));
    this.currentURL = window.location.href; 
    // console.log(this.currentURL);
    this.href = this.router.url;
        console.log(this.router.url);
  }

}
