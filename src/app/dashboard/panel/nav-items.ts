export interface NavItem {
    path: string;
    title: string;
    icon?: string;
    allowerRoles: string[];
}

const links: NavItem [] = [
    {
        path: 'alumnos',
        title: 'Estudiantes',
        icon: 'person',
        allowerRoles: [],
    },

    {
        path: 'cursos',
        title: 'Cursos',
        icon: 'school',
        allowerRoles: ['admin'],
    },
    {
        path: 'inscripciones',
        title: 'Inscripciones',
        icon: 'book',
        allowerRoles: [],
    },

]

export default links;