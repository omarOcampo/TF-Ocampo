import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateInscripcionData, InscriptionWithAll } from '../models';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: InscriptionWithAll[] }>(),
    'Load Inscripciones Failure': props<{ error: unknown }>(),
    
    'Delete Inscripcion': props < {id: number}> (),
    'Delete Inscripcion Success': props < {data: number}> (),
    'Delete Inscripcion Failure': props < {error: unknown}> (),
    
    'Create Inscripcion': props <{data:CreateInscripcionData}> (),
    'Create Inscripcion Success ': props <{data:InscriptionWithAll}> (),
    'Create Inscripcion Failure': props <{error:unknown}> (),
  }
});
