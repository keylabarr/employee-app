
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ReportEmployeesComponent } from './report-employees/report-employees.component';


const routes: Routes = [
  {
    path: '',
    component: ReportEmployeesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
