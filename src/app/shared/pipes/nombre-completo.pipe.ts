import { Pipe, PipeTransform } from '@angular/core';
import { alumno } from '../../alumnos/alumnos.component';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: alumno , ...args: unknown[]): unknown {
    return `${value.nombre} ${value.apellido}`;
  }

}
