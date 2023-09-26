import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppMaterialModule } from "src/app/layout/material/app.material.module";
import { PipesModule } from "./pipes/pipes.module";
import { AlertDialogComponent } from "./components/alert-dialog/alert-dialog.component";



@NgModule({
  declarations: [
    AlertDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    RouterModule,



  ],
  exports: [

    PipesModule,
  ],
  providers: [

  ]
})
export class AppShareModule { }
