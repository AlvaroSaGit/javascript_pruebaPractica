//Una empresa necesita organizar los precios de sus productos para analizarlos. El programa debe recibir los precios registrados, ordenarlos de mayor a menor y determinar cuál es el precio más alto y el más bajo.

function analizarPrecio(precios){

    //Para organizar de mayor a menor
    precios.sort((a,b) => b-a);

    //Se obtienen el valor de los precios extremos es decir mas alto y mas bajo
    let preAlto = precios[0];
    let preBajo = precios[precios.length -1];

    //Se retornan los resultados
    return {
        ordenados: precios,
        mayor: preAlto,
        menor: preBajo
    };
}

let precios = [1200, 4500, 8500, 750, 350];

let resultado = analizarPrecio(precios);

console.log("Precios ordenados:", resultado.ordenados);
console.log("Precio más alto:", resultado.mayor);
console.log("Precio más bajo:", resultado.menor);