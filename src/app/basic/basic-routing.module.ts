import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path:'',
    component:BasicComponent,
    children:[
      {
        path:'',
        redirectTo:'data-binding',
        pathMatch:'full'
      },
      {
        path:'data-binding',
        component:DataBindingComponent
      },
      {
        path:'directives',
        component:DirectivesComponent
      },
      {
        path:'pipes',
        component:PipesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
