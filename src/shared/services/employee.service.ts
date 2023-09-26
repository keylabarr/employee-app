import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "express";
import { Employee } from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends BaseService<Employee>{

 //protected _url: string = (environment.apiUrl[environment.apiUrl.length - 1] == '/') ? `${environment.apiUrl}` : `${environment.apiUrl}`;

constructor(
    _http:HttpClient,

  ) {
    super(_http, 'Employees');
  }




}
