// Un instructor desea verificar la asistencia de sus aprendices a una sesión. Para ello
// dispone de una lista de estudiantes inscritos y necesita validar si un nombre ingresado por
// el usuario corresponde a un aprendiz registrado. El programa debe confirmar la asistencia
// o reportar que el aprendiz no está inscrito.

// importamos la liberia de prompt-sync
import prompt from 'prompt-sync'
// permite la entrada de la terminal 
const aprendiz = prompt();

// arreglo
// creamos un array fijo de 14 aprendices 
let nombres_aprendices = [
    "juan",
    "alvaro",
    "leidy",
    "jhon",
    "santos",
    "anderson",
    "dylan",
    "jhonatan",
    "sol",
    "sergio",
    "wendy",
    "juandavid",
    "caceres",
    "lucia",

]
// creamos una funcion para validar la asistencia de los aprendices 
// en el cual lo que hace es buscar los nombres de los aprendices de la array con el includes() en el cual es un metodo de busqueda en javascript
// funcion que recibe el arreglo y el nombre a validar
function validar_asistencia(nombres_aprendices,nombre_validar){
    //metodo
    if (nombres_aprendices.includes(nombre_validar)){
        // si el nombre del aprendiz esta en la array imprime que esta inscrito y asistio ala sesion 
        //retornar 
        return (nombre_validar + " esta inscrito  y asistio ala sesion")
    }
    else {
        // si el nombre del aprendiz en la array no esta inscrito imprime que no esta en el curso 
        // retornar
        console.log("Alerta")
        return (nombre_validar + " No esta inscrito/a en el curso")
    }
}

// creamos una variable para validar el nombre del aprendiz
// en el cual lo que hace es solicitar al usurio un nombre que desea validar para saber si esta en la lista de estudiantes inscritos 
let nombre_validar = aprendiz("ingrese el nombre a validar : ");


// imprimimos si el nombre ingresado es valido en la lista de asistencia
// en el cual lo que hace es llamar ala funcion  con el array completo y el nombre ingresado y imprime el resultado 
console.log(validar_asistencia(nombres_aprendices,nombre_validar))