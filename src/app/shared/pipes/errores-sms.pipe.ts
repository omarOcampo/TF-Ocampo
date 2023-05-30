import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'erroresSms'
})
export class ErroresSmsPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {
    console.log(error);
    const opciones: Record<string, string> = {
      required: 'Este campo es requerido',
      minlength: 'Debe tener al menos 3 caracteres',
      maxlength: 'No debe superar los 10 caracteres'
     
    }
    
    return opciones[error.key];
  }

}
