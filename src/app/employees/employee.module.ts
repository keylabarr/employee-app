import { CommonModule } from "@angular/common";
import { AppMaterialModule } from "../layout/material/app.material.module";
import { EmployeeRoutingModule } from "./employee-routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { ReportEmployeesComponent } from "./report-employees/report-employees.component";

import { MatDialogModule } from "@angular/material/dialog";
import { CreateEmployeeComponent } from "./crud/create-employee/create-employee.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { PipesModule } from "src/shared/pipes/pipes.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";




@NgModule({
  declarations: [
    ReportEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    PipesModule,
    MatSnackBarModule
  ]
})
export class EmployeeModule { }
