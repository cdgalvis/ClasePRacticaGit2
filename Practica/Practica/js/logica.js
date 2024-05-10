function logica() {
                      
    var numeros = [
                    "Cristhian", 
                    "David", 
                    "Carlos", 
                    "Miguel", 
                    true, 
                    5.5, 
                    "Karina"
                ]
    //console.log(numeros[0] + " - " + numeros[1])
        
    // Ciclos                       
    /* 
        Cristhian    i = 0;  0 < 5 ; i++ // 0 = 0 + 1 
        David        i = 1;  1 < 5 ; i++ // 1 = 1 + 1
        Carlos       i = 2;  2 < 5 ; i++ // 2 = 2 + 1
        Miguel       i = 3;  3 < 5 ; i++ // 3 = 3 + 1
        Andres       i = 4;  4 < 5 ; i++ // 4 = 4 + 1
        Termina Aqui i = 5;  5 < 5 ; i++             
    */
   
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i])
    }

    for (let i = 2; i < 20; i = i + 2) {
        console.log(i)
    }
   
}

//var = Global y Local // No se reinician - No libera espacio en memoria
//let = Local          // Se reinicia     - Libera memoria

/*var servidor  = "10.5.5.2.1";
var prueba2 = 0;

function name() {
    prueba2
    let prueba3 = 5
}*/


/*
function acelerar(numero1,numero2) {
    // Codigo a ejecutar
}

acelerar(5,5)



let multiplicar  = function (numero1,numero2) {
    // codigo 
}*/


function arrobj() {

    /*let variablea
    variablea = 0

    let variableb
    variableb = 0

    let variablec = 0 
    let variabled = 0 

    let variablex, variabley
    variablex = variabley = 0*/

    let cursos = [
                    {"cod_curso" : "AE600","descripcion" : "Algoritmos y Estructura de datos"},
                    {"cod_curso" : "BD253","descripcion" : "Bases de Datos"}
                ]
    
    console.log(cursos)   
    console.log(cursos[0].cod_curso) 
    console.log(cursos[1].cod_curso)          
    
    let cursos2 = [
                    {
                    "cod_curso" : ["AE600","BD253"],
                    "descripcion" : ["Algoritmos y Estructura de datos", "Bases de Datos"]
                    }
                ]
    console.log(cursos2)
    console.log(cursos2[0].cod_curso[0]) 
    console.log(cursos2[0].cod_curso[1]) 


    /*for (let i = 0; i < cursos.length; i++) {
        console.log(cursos[i].cod_curso)
    }*/

    
}












