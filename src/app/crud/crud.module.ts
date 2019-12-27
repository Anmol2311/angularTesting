import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { CustomModule } from '../custom/custom.module';

@NgModule({
  declarations: [CrudComponent, DashboardComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomModule,
    CrudRoutingModule
  ],
  exports: [DashboardComponent, AddComponent, EditComponent]
})
export class CrudModule { }
