import { subjects } from "src/app/subjects";

export interface Cursos{
    id:number;
    subjectId:number;
    fechaIni:Date;
    fechaFin:Date;
  };

  export interface cursosWithSubject extends Cursos {
    subject: subjects;
  }