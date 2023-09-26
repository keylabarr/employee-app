import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './layout/material/app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppShareModule } from 'src/shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main/main/main.component';
import { PipesModule } from 'src/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainComponent,

  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    AppShareModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    PipesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
