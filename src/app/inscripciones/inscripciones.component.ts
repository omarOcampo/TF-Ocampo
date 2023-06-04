import { Component, OnInit } from '@angular/core';
import { InscripcionesServicesService } from './servicios/inscripciones-services.service';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { selectInscripcionesState } from './store/inscripciones.selectors';
import { Observable } from 'rxjs';
import { State } from './store/inscripciones.reducer';
import { Inscription } from './models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesDialogComponent } from './component/inscripciones-dialog/inscripciones-dialog.component';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
  state$: Observable<State>
  
  constructor (private inscripcionesService: InscripcionesServicesService,
      private store: Store,
      private matDialog: MatDialog) {
        this.state$ = this.store.select(selectInscripcionesState)
      }
    
    
   ngOnInit(): void {
      //this.inscripcionesService.getAllInscriptions().subscribe(console.log);
      this.store.dispatch(InscripcionesActions.loadInscripciones())

}
eliminarInscripcionPorId(id: number) : void{
  this.store.dispatch(InscripcionesActions.deleteInscripcion({id}))
}

crearInscripcion (): void{
this.matDialog.open(InscripcionesDialogComponent)
}

}
