import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './index/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'basic',
    pathMatch:'full'
  },
  {
    path:'basic',
    loadChildren:'./basic/basic.module#BasicModule'
  },
  {
    path:'data-sharing',
    loadChildren:'./data-sharing/data-sharing.module#DataSharingModule'
  },
  {
    path:'angular-form',
    loadChildren:'./angular-form/angular-form.module#AngularFormModule'
  },
  {
    path:'crud-operation',
    loadChildren:'./crud/crud.module#CrudModule'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
