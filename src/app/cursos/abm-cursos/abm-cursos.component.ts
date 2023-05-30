import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.scss']
})
export class AbmCursosComponent {
  nombreControl= new FormControl('',[Validators.required, Validators.minLength(3)])
  fechaIniControl = new FormControl('',[Validators.required])
  fechaFinControl = new FormControl('',[Validators.required])
  
  cursosForm = new FormGroup({
    nombre: this.nombreControl,
    fechaIni: this.fechaIniControl,
    fechaFin: this.fechaFinControl  
  })

constructor(private dialogRef: MatDialogRef<AbmCursosComponent>){}
  
guardar():void{
  if(this.cursosForm.valid){
  this.dialogRef.close(this.cursosForm.value)

}else {
  this.cursosForm.markAllAsTouched()}
}
}
