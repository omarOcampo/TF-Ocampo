import { createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/login/models";
import { establecerUsuario } from "./auth.actions";

export const authFeatureKey= 'auth';

export interface AuthState {
    authUser: Usuario | null;
}

const initialState: AuthState = {
    authUser: null,
}

export const authReducer = createReducer(
    initialState,
    on(establecerUsuario, (currentState, { payLoad }) => {
        return {
            authUser: payLoad
        }
    }
    ))