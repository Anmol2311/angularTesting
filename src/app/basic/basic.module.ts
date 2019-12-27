import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicComponent } from './basic.component';
import {FormsModule} from '@angular/forms';
import { HoverDirective } from './hover.directive';
import { SortPipe } from './sort.pipe';
import { IndexModule } from '../index/index.module';

@NgModule({
  declarations: [DataBindingComponent, PipesComponent, DirectivesComponent, BasicComponent, HoverDirective, SortPipe],
  imports: [
    CommonModule,
    BasicRoutingModule,
    FormsModule,
    IndexModule
  ],
  exports:[DataBindingComponent, PipesComponent, DirectivesComponent]
})
export class BasicModule { }
