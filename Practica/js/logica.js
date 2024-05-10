const alumnosMatriculados = [
    {
      ru: "19",
      nombre: "Pedro",
      apellido: "Pérez",
      codCurso: "AE600",
      nombreCurso: "Algoritmos y Estructuras de datos",
      descripcion: "",
    },
    {
      ru: "2-7",
      nombre: "Juan",
      apellido: "Jara",
      codCurso: "BD253",
      nombreCurso: "Bases de Datos",
      descripcion: "",
    },
    {
      ru: "2-7",
      nombre: "Juan",
      apellido: "Jara",
      codCurso: "AE000",
      nombreCurso: "Algoritmos y Estructuras de datos",
      descripcion: "",
    },
    {
      ru: "3-5",
      nombre: "Diego",
      apellido: "Diaz",
      codCurso: "BD253",
      nombreCurso: "Bases de Datos",
      descripcion: "",
    },
    {
      ru: "44",
      nombre: "Martinez",
      apellido: "",
      codCurso: "BD253",
      nombreCurso: "Bases de Datos",
      descripcion: "",
    },
    {
      ru: "",
      nombre: "Maria",
      apellido: "",
      codCurso: "",
      nombreCurso: "",
      descripcion: "",
    },
  ];
  const alumnos = [
    {
      rut: "1-9",
      nombre: "Pedro",
      apellido: "Perez",
      codCurso: "AE600",
      nombreCurso: "Algoritmos y Estructuras de datos",
      descripcion: "",
    },
    {
      rut: "2-7",
      nombre: "Juan",
      apellido: "Jara",
      codCurso: "BD253",
      nombreCurso: "Bases de Datos",
      descripcion: "",
    },
    {
      rut: "3-5",
      nombre: "Diego",
      apellido: "Diaz",
      codCurso: "BD253",
      nombreCurso: "Bases de Datos",
      descripcion: "MATRICULA",
    },
    {
      rut: "44",
      nombre: "Maria",
      apellido: "Martinez",
      codCurso: "",
      nombreCurso: "",
      descripcion: "",
    },
  ];
  const cursos = [
    {
      codCurso: "AE600",
      nombreCurso: "Algoritmos y Estructuras de datos",
      descripcion: "",
    },
    {
      codCurso: "BD253",
      nombreCurso: "Bases de Datos",
      descripcion: "",
    },
  ];
  const asignaturasPorAlumno = [
    {
      rut: "1-9",
      codCurso: "AE600",
      descripcion: "F",
    },
    {
      rut: "2-7",
      codCurso: "BD253",
      descripcion: "",
    },
    {
      rut: "2-7",
      codCurso: "AE000",
      descripcion: "Formación",
    },
    {
      rut: "3-5",
      codCurso: "BD253",
      descripcion: "",
    },
    {
      rut: "4-4",
      codCurso: "BD253",
      descripcion: "",
    },
  ];
function showFirstBtn(){
    console.log(alumnos)
    console.log(cursos)
    console.log(asignaturasPorAlumno)
}

function showSecondBtn(){
    console.log(alumnosMatriculados)
}