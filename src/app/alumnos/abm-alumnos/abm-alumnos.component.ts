
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {
    
    nombreControl= new FormControl('',[Validators.required, Validators.minLength(3)])
    apellidoControl= new FormControl('',[Validators.required, Validators.minLength(3)])
    fechaRegistroControl= new FormControl('',[Validators.required])
    

    alumnosForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      fechaRegistro: this.fechaRegistroControl,
      
    })

  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>){}
    
  guardar():void{
    if(this.alumnosForm.valid){
    this.dialogRef.close(this.alumnosForm.value)

  }else {
    this.alumnosForm.markAllAsTouched()}
  }
}
