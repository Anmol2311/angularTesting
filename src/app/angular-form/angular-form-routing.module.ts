import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUtdComponent } from './register-utd/register-utd.component';
import { RegisterUrfComponent } from './register-urf/register-urf.component';
import { AngularFormComponent } from './angular-form.component';

const routes: Routes = [
  {
    path: '',
    component: AngularFormComponent,
    children: [
      {
        path:'',
        redirectTo:'register-utd',
        pathMatch:'full'
      },
      {
        path: 'register-utd',
        component: RegisterUtdComponent
      },
      {
        path: 'register-urf',
        component: RegisterUrfComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormRoutingModule { }
