//Una plataforma educativa desea implementar un sistema de recomendación para cada aprendiz según su comportamiento académico. La plataforma almacena un arreglo de cursos completados por el aprendiz, cada curso contiene: nombre, calificación final, horas dedicadas y número de intentos.
//El sistema debe aplicar un callback de recomendación, el cual definirá la lógica para seleccionar los cursos más adecuados para continuar su formación.
//El análisis debe considerar que el usuario puede definir distintos criterios de recomendación, por ejemplo:
//• Recomendar cursos donde el aprendiz obtuvo una calificación baja (refuerzo).
//• Recomendar cursos relacionados que el aprendiz haya dejado sin finalizar.
//• Recomendar cursos donde dedicó pocas horas, pero obtuvo buen resultado.
//El programa debe ser capaz de aplicar cualquier criterio definido por el callback, procesar la información y generar una recomendación final ordenada por prioridad.

//Creamos el arreglo de los cursos
let cursos =[
    {nombre: "Matemática", calificacion: 3.6, horas: 20, intentos: 2, finalizado: "Si"},
    {nombre:"Ingles", calificacion: 1.8, horas: 12, intentos: 6,finalizado: "Si"},
    {nombre:"Español", calificacion: 2.8, horas: 22, intentos: 2,finalizado: "No"},
    {nombre:"Educación fisica", calificacion: 3.5, horas: 12, intentos: 1,finalizado: "Si"},
    {nombre:"Sociales", calificacion: 2.0, horas: 18, intentos: 3,finalizado: "No"}
]

//
function generarRecomendaciones(cursos,callback){
    return cursos
        //Este método transforma cada valor del array original guardando el resultado en un array independiente
        .map(curso => {
                let resultado = callback(curso);

                return {
                    ...curso,
                    prioridad: resultado.prioridad,
                    motivo: resultado.motivo
                };
            })
            //Creamos un nuevo arreglo con todos los elemetos de otro arreglo anterior
            .filter(curso => curso.prioridad > 0)
            //Ordena los elementos del array
            .sort((a, b) => b.prioridad - a.prioridad);
}

//Creamos la función 
function criterioRecomendacion(curso) {

    //Baja calificación osea un refuerzo
    if (curso.calificacion < 3) {
        return {
            prioridad: 3,
            motivo: "Calificación baja, necesita refuerzo"
        };
    }

    //No ha finalizado
    if (!curso.finalizado) {
        return {
            prioridad: 2,
            motivo: "Curso no finalizado"
        };
    }

    //Pocas horas pero buen resultado
    if (curso.horas < 5 && curso.calificacion >= 4) {
        return {
            prioridad: 1,
            motivo: "Buen resultado con pocas horas"
        };
    }

    return { prioridad: 0, motivo: "" };
}

//
let recomendaciones = generarRecomendaciones(cursos, criterioRecomendacion);

console.log(recomendaciones);