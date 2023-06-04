interface NavItem {
    path: string;
    title: string;
    icon?: string;
}

const links: NavItem [] = [
    {
        path: 'alumnos',
        title: 'Estudiantes',
        icon: 'person'
    },

    {
        path: 'cursos',
        title: 'Cursos',
        icon: 'school'
    },
    {
        path: 'inscripciones',
        title: 'Inscripciones',
        icon: 'book'
    },

]

export default links;