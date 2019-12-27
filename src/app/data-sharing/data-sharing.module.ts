import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSharingRoutingModule } from './data-sharing-routing.module';
import { DataSharingComponent } from './data-sharing.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [DataSharingComponent, ParentComponent, ChildComponent, Test1Component, Test2Component],
  imports: [
    CommonModule,
    DataSharingRoutingModule,
    FormsModule
  ],
  exports: [ParentComponent, ChildComponent, Test1Component, Test2Component]
})
export class DataSharingModule { }
