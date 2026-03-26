/* Ejercicio 7: Registro dinámico de productos usando parámetros rest
Enunciado analítico:
Una aplicación desea permitir el registro de un número indefinido de productos sin
duplicados. El programa debe almacenar los productos ingresados y evitar registros
repetidos.
Requerimientos:
• Crear una función registrarProductos(...productos).
• Usar parámetros rest.
• Validar duplicados.
• Retornar la lista final de productos.
Entradas:
• Múltiples nombres de productos.
Salidas:
• Lista de productos sin duplicados. */

// importamos la liberia de prompt-sync
import prompt from 'prompt-sync'
// permite la entrada de la terminal 
const duplicados = prompt();

// recibe una cantidad indefinida de productos como array automatico 
function registrarProductos(...productos) {
    // inicializamos una lista unica 
    // acumula los productos sin duplicados 
    const listaUnica = [];  
    
    // itera la array del reset 
    for (let producto of productos) {
        const nombreLimpio = producto.toLowerCase();// convierte todo a minusculas  
        
        // retorna true o false 
        // verifica si el producto ya existe 
        const existe = listaUnica.some(p => p.toLowerCase() === nombreLimpio);
        
        // Si no existe, agrega el producto 
        if (!existe) {
            listaUnica.push(producto.trim());  
        }
    }
    
    return listaUnica;
}

console.log(" REGISTRO DE PRODUCTOS ");
// preguntamos al usuario cuantos productos desea registrar 
const cantidad = parseInt(duplicados("Cuantos productos desea registrar:"));
// creamos una caja vacia donde se guarda todos los productos que ingrese el usuario 
const productos = [];
    // creamos un bucle para que repita tantas veces como productos dijo el usuario     
    for (let i = 0; i < cantidad; i++) {
        const producto = duplicados("Producto "+ (i+1) + ": ");
        if (producto && producto) { // si no esta vacio 
        productos.push(producto);// agrega a la caja de productos 
        }
    }
// llamamos ala funcion y envia todos los productos que se ingresaron 
const listaFinal = registrarProductos(...productos);  

// imprimimos los resultados finales sin duplicados 
console.log("Productos únicos:", listaFinal);