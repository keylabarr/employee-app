import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GENDEROPTIONS, STATES} from 'src/app/_common/base/Constants';
import { EmployeesService } from 'src/shared/services/employee.service';
import { Employee } from 'src/shared/models/employee';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  personalDataFormGroup : FormGroup;
  public genderOptions = GENDEROPTIONS;
  public statesOptions = STATES;
  parentMessage : boolean = false;
  animal: string;
  name: string;
  updateEmployee : boolean;
  saveEmployeeOk : boolean;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  constructor(private formBuilder: FormBuilder,
    private _service : EmployeesService,
    public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idEmployee: string},
    private _snackBar: MatSnackBar
    ){
      this.updateEmployee = false;
    }

  ngOnInit(): void
  {
    this.personalDataFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      secondLastName: ['', null],
      role: ['', Validators.required],
      gender : ['', Validators.required]
    });


    if(this.data.idEmployee != undefined){
      this.getEmployeeById(this.data.idEmployee);
      this.updateEmployee = true;
    }
  }

  getEmployeeById(id : string){
    this._service.getById(id).subscribe((res : Employee) => {
      this.personalDataFormGroup.setValue({
        name: res.name,
        lastName: res.lastName,
        secondLastName : res.secondLastname,
        role : res.rol,
        gender : res.sexo,
      })
    })
  }

  addEmployee(){

    const employee : Employee = new Employee();

    employee.name = this.personalDataFormGroup.value.name;
    employee.lastName = this.personalDataFormGroup.value.lastName;
    employee.secondLastname = this.personalDataFormGroup.value.secondLastName;
    employee.rol = this.personalDataFormGroup.value.role;
    employee.sexo = this.personalDataFormGroup.value.gender;

   if(!this.updateEmployee){
    this._service.create(employee).subscribe(res => {
      console.log(res)
      if(res){
        this.openSnackBar("Se guardo el empleado con exito.");
        this.dialogRef.close();
      }
    }, err => {
      console.log(err);
    });
   }else {
    this._service.update(this.data.idEmployee,employee).subscribe(res => {
      console.log(res)
      if(res){
        this.openSnackBar("Se actualizo el empleado con exito.");
        this.close();
      }
    }, err => {
      console.log(err);
    });
   }

  }

  close() {
    this.dialogRef.close();
    this.updateEmployee = false;
  }

  openSnackBar(message : string) {
    this._snackBar.open(message, 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000
    });
  }

}

