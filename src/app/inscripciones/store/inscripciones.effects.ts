import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscripcionesActions } from './inscripciones.actions';
import { InscripcionesServicesService } from '../servicios/inscripciones-services.service';


@Injectable()
export class InscripcionesEffects {

  createInscripciones$ = createEffect (() =>{
    return this.actions$.pipe(
      ofType (InscripcionesActions.createInscripcion),
      concatMap ((action) => this.inscripcionesService.createInscripcion (action.data)
      .pipe(
        map ((res) => InscripcionesActions.createInscripcionSuccess ({ data: res})),
        catchError((error) => of (InscripcionesActions.createInscripcionFailure ({error})))
      )
      )
    )
  })
  
  loadInscripciones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.loadInscripciones),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.inscripcionesService.getAllInscriptions().pipe(
          map(data => InscripcionesActions.loadInscripcionesSuccess({ data })),
          catchError(error => of(InscripcionesActions.loadInscripcionesFailure({ error }))))
      )
    );
  });

  deleteInscripcion$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.deleteInscripcion),
      concatMap((action) =>
        this.inscripcionesService.deleteInscripcionById(action.id).pipe(
          map(data => InscripcionesActions.deleteInscripcionSuccess({ data: action.id})), 
          catchError(error => of(InscripcionesActions.deleteInscripcionFailure({ error })))
 
        )
      )
    );
  });

  constructor(private actions$: Actions,
    private inscripcionesService: InscripcionesServicesService)
   {}
}
