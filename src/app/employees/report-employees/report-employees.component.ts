import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { Employee } from 'src/shared/models/employee';
import { EmployeesService } from 'src/shared/services/employee.service';
import { CreateEmployeeComponent } from '../crud/create-employee/create-employee.component';
import { AlertDialogComponent } from 'src/shared/components/alert-dialog/alert-dialog.component';
import { identifierName } from '@angular/compiler';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-report-employees',
  templateUrl: './report-employees.component.html',
  styleUrls: ['./report-employees.component.css']
})
export class ReportEmployeesComponent {
  ELEMENT_DATA: Employee[] = [];
  displayedColumns: string[] = ['name', 'lastName', 'secondLastname', 'sexo', 'rol', 'CreatedAt', 'edit', 'actions'];
  dataSource : any;
  employees : Employee[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public dateType = 'shortDate'

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  constructor(private _service : EmployeesService, private router: Router, public dialog: MatDialog, private _snackBar: MatSnackBar){
    this.loadData()
  }

  loadData(){
    //falta hacer pipe de la fecha
    this._service.getAll().subscribe( (res : Employee[]) => {
      console.log(res)
      this.dataSource = new MatTableDataSource<Employee>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDelete(idEmpleado: string){
    this.dialog
      .open(AlertDialogComponent, {
        data:  {title : "Eliminar empleado", message :`¿Estas seguro de eliminar el registro?`}
      })
      .afterClosed()
      .subscribe((confirm: Boolean) => {
        if(confirm){
          this.delete(idEmpleado);
        }
      });
  }

  delete(id : string){
    this._service.delete(id).subscribe( res => {
      if(res){
       this.loadData();
       this.openSnackBar();
      }
    },err => {
     console.log(err);
   });
  }

  editEmployee(id : string){
    this.openDialog(id);
  }

  openDialog(id? : string): void {
    const dialogRef = this.dialog.open(CreateEmployeeComponent,{
      data: {idEmployee : id},
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  openSnackBar() {
    this._snackBar.open("Se elimino el empleado con exito.", 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000
    });
  }


}
