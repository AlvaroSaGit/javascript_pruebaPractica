//Una empresa desea automatizar la validación de pagos recibidos. Cada pago debe pasar por un callback que determine si cumple las condiciones para ser aprobado.

//Creamos el arreglo de los pagos recibidos
let pagos = [
    { id: 1, monto: 500, estado: "pendiente" },
    { id: 2, monto: 1500, estado: "completo" },
    { id: 3, monto: 8000, estado: "completo" },
    { id: 4, monto: 200, estado: "completo" }
];

//Creamos la función procesarPagos para que recorra la función y ejecute el callback
function procesarPagos(pagos,callback){
    let resultado=[];

    for (let i = 0; i < pagos.length; i++) {
        let pago = pagos[i];

        if (callback(pago)) {
            resultado.push({ ...pago, resultado: "Aprobado" });
        } else {
            resultado.push({ ...pago, resultado: "Rechazado" });
        }
    }

    return resultado;

}

//Creamos la función para la aprobación de los pagos
function reglaAprobacion(pago) {
    return pago.monto > 1000 && pago.estado === "completo";
}


let resultado = procesarPagos(pagos, reglaAprobacion);

console.log(resultado);