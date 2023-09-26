import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employees/crud/create-employee/create-employee.component';
import { MainComponent } from './main/main/main.component';



const routes: Routes = [
  <any>
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'employees',
        loadChildren: () => import('./employees/employee.module').then(m => m.EmployeeModule)
      }

    ],
  },
  {
    path: "**",
    redirectTo: '/'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
