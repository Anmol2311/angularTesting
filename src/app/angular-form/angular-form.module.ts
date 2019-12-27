import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFormRoutingModule } from './angular-form-routing.module';
import { AngularFormComponent } from './angular-form.component';
import { RegisterUtdComponent } from './register-utd/register-utd.component';
import { RegisterUrfComponent } from './register-urf/register-urf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AngularFormComponent, RegisterUtdComponent, RegisterUrfComponent],
  imports: [
    CommonModule,
    AngularFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RegisterUtdComponent, RegisterUrfComponent]
})
export class AngularFormModule { }
