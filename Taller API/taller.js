// Punto 1
const elementos = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log("Lista de compras:");
elementos.forEach(item => console.log(item));

// Punto 2
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log("Días de la semana:");
diasSemana.forEach(dia => console.log(dia));

// Punto 3
const usuarios = [
  { nombre: "Samuel", apellido: "Ortiz", telefono: "3125654254", edad: 30 },
  { nombre: "Julian", apellido: "González", telefono: "3152545689", edad: 25 },
  { nombre: "Maria", apellido: "Casas", telefono: "3205456884", edad: 40 },
  { nombre: "Laura", apellido: "Martinez", telefono: "3162532142", edad: 35 },
  { nombre: "Pedro", apellido: "Cruz", telefono: "3108740052", edad: 28 }
];
console.log("Información de usuarios:");
usuarios.forEach(usuario => console.log(usuario));

// Punto 4
const estudiantes = [
  { nombre: "Kamila", apellido: "Barragan", telefono: "3154235275", edad: 20, materias: ["Matemáticas", "Ciencias"], hobbies: ["Leer", "Bailar"] },
  { nombre: "David", apellido: "Gómez", telefono: "3168740042", edad: 22, materias: ["Historia", "Literatura"], hobbies: ["Fútbol", "Pintar"] },
  { nombre: "Sofía", apellido: "Fernández", telefono: "3008742135", edad: 21, materias: ["Inglés", "Programación"], hobbies: ["Viajar", "Cocinar"] },
  { nombre: "Javier", apellido: "Prada", telefono: "3154235895", edad: 23, materias: ["Física", "Química"], hobbies: ["Jugar videojuegos", "Tocar guitarra"] },
  { nombre: "Luisa", apellido: "Bustacara", telefono: "3254521232", edad: 24, materias: ["Biología", "Arte"], hobbies: ["Patinaje", "Cantar"] }
];
console.log("Información de estudiantes:");
estudiantes.forEach(estudiante => console.log(estudiante));

// Punto 5
const arregloprincipal = ["uno", "dos", "tres", ["cuatro", "cinco"]];
console.log("Arreglo Principal:");
arregloprincipal.forEach(arreglo => console.log(arreglo));

// Punto6
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data =>{
    data.forEach(post => console.log(post));
  })
