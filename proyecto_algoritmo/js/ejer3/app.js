//3. Un aprendiz recibe varias calificaciones y desea saber su rendimiento general. Se necesita un programa que permita ingresar las notas obtenidas, calcule el promedio y determine si el rendimiento es Alto, Medio o Bajo según rangos preestablecidos.


function calcularPromedio (notas){
let suma = 0;

//Recorremos el arreglo mediante un for
for (let i = 0;i < notas.length;i++){
    suma += notas[i];
}

//Calculamos promedio 
let promedio = suma / notas.length;

//Declaramos y determinamos el rendimiento
let rendi;

if (promedio >=4.0){
    rendi ="Alto";
}else if (promedio>=3.0){
    rendi="Medio";
}else {
    rendi="Bajo";
}

//Se retorna los resultados
return {
    promedio: promedio,
    rendimiento: rendi
};

}

let notas = [4.5, 3.8, 4.2, 2.9];

let resultado = calcularPromedio(notas);

console.log("Promedio:", resultado.promedio.toFixed(2));
console.log("Rendimiento:", resultado.rendimiento);