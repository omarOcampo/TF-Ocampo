import { alumno } from "src/app/alumnos/alumnos.component";
import { Cursos } from "src/app/cursos/models";
import { subjects } from "src/app/subjects";

export interface Inscription
    {id: number,
     studentId: number,
     courseId: number,
     subjectId:number
    }



export interface InscriptionWhitStudent extends Inscription {
    student: alumno
}

export interface InscriptionWhitSubject extends Inscription {
 subject: subjects;
}

export interface InscriptionWhitCourse extends Inscription {
    course: Cursos;
}

export interface CreateInscripcionData {
    studentId:number;
    courseId: number;
    subjectId: number
}
export type InscriptionWithAll =  InscriptionWhitStudent & InscriptionWhitSubject & InscriptionWhitCourse