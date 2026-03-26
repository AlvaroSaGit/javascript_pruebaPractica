/* Ejercicio 2: Actualización de inventario en tienda digital
Enunciado analítico:
Una tienda en línea requiere conocer el inventario actualizado de un producto. Se debe
calcular el inventario final según la cantidad inicial, las unidades vendidas y las unidades
recibidas en reposición. Además, se debe identificar si el inventario queda en estado crítico.
Requerimientos:
• Crear una función calcularInventario().
• Usar operadores matemáticos.
• Validar valores negativos con condicionales.

• Indicar si el inventario es crítico (menor a 5 unidades).
Entradas solicitadas por el programa:
• Cantidad inicial.
• Cantidad vendida.
• Cantidad recibida.
Salidas:
• Inventario final.
• Mensaje “Inventario crítico” o “Inventario estable”.*/


//importamos la liberia de prompt-sync
import prompt from 'prompt-sync'
// permite la entrada de la terminal 
const producto = prompt();

// creamos una funcion principal para calcula el inventario 
// lo que hace es que recibe 3 parametros que son inicial,vendida,recibida
function calcular_inventario(inicial,vendida,recibida){
    // validacion de negativos 
    if (inicial < 0 && vendida < 0 &&  recibida < 0){
        return " error: valores negativos no son permitidos ";
            
    }
// operadores matematicos 
// 1. calcular stock despues de las ventas
const stock_despues_de_las_ventas = inicial - vendida; 
// 2. sumar la reposicion recibidas 
const inventario_final = stock_despues_de_las_ventas + recibida;

if (inventario_final < 5){ // compara que el inventario final sea menor que 5
    console.log("alerta")
    // si es menor que 5 retorna un mensaje de inventario critico 
    return "inventario final: " + inventario_final + " inventario critico ";
    }else{
        // si es mayor a 5 retorna un mensaje de inventario estable 
        return "inventario final:  " + inventario_final + " inventario estable "; 
        }
    }
// solicitamos al usurio que ingrese  la cantidad inicial,vendidad y recibida 
const inicial = parseInt(producto("ingrese la cantidad inicial: "));
const vendida = parseInt(producto("ingrese la cantidad vendida: "));
const recibida = parseInt(producto("ingrese la cantidad recibida: "));
// imprimimos los resultados 
const resultado = calcular_inventario(inicial, vendida, recibida);
console.log(resultado);