import { Component, OnInit } from '@angular/core';
import { CursosServiciosService } from '../core/servicios/cursos-servicios.service';
import { MatTableDataSource } from '@angular/material/table';
import { Cursos } from './models';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})



export class CursosComponent implements OnInit{
  
 
  constructor(private cursosService: CursosServiciosService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private matDialog: MatDialog,
              ){}
  
  dataSource = new MatTableDataSource<Cursos>();
  
  displayedColumns = ['id','nombre','fechaIni','fechaFin','eliminar', 'ver_detalle'];

  ngOnInit(): void {
    this.cursosService.obtenerCursos()
    .subscribe({
      next: (cursos) => this.dataSource.data = cursos
    });
  }
  
  crearCurso(): void {
    const dialog = this.matDialog.open(AbmCursosComponent)

   dialog.afterClosed().subscribe((valor: Cursos) => {
    if(valor){
      this.dataSource.data = [...this.dataSource.data,
      {
        ...valor, 
        id: this.dataSource.data.length+1,
      }
      ];
    }
   })
  }

  irAlDetalle(cursoID: number): void {
    this.router.navigate(['dashboard','cursos', cursoID])
  }

  eliminarCurso(cursoAEliminar: Cursos):void{
    this.dataSource.data = this.dataSource.data.filter (
      (cursoAct) => cursoAct.id !== cursoAEliminar.id,
    )
  }
}
