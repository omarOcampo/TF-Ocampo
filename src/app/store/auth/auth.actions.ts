import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/login/models";

export const establecerUsuario = createAction(
    '[auth] Establecer usuario',
    props<{ payLoad: Usuario }>(),
   
);