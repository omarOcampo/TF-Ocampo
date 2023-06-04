import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { InscriptionWithAll } from '../models';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  loading: boolean,
  inscripciones: InscriptionWithAll[],
  error: unknown

}

export const initialState: State = {
  loading:false,
  inscripciones:[],
  error: false
};

export const reducer = createReducer<State>(
  initialState,
  on(InscripcionesActions.loadInscripciones, state =>  {
    return {
      ...state,
      loading:true
    }

  }),
  on(InscripcionesActions.loadInscripcionesSuccess, (state, action) => {
    return {
      ...state,
      loading:false,
      inscripciones: action.data
    }
  }),
  on(InscripcionesActions.loadInscripcionesFailure, (state, action) => {
    return {
      ...state,
      loading:false,
      error: action.error
    }
  }),
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

