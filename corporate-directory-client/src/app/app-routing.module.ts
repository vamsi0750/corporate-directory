import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';

const routes: Routes = [
  {path:'',redirectTo:'view-employees',pathMatch:'full'},
  {path:'view-employees',component:ViewEmployeesComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
