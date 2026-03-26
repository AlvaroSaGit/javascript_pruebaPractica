//Una cadena de supermercados necesita un sistema capaz de analizar, clasificar y depurar su inventario. Se proporciona un arreglo con los productos registrados, cada uno en la forma:
//{ id, nombre, categoria, stock, precio, perecedero, fechaVencimiento }.
//El sistema debe aplicar un callback de control, el cual definirá una regla personalizada para cada producto (por ejemplo: retirar productos, ajustar precios, marcar alertas, etc.).
//Adicionalmente, el sistema debe realizar cálculos avanzados:
//• Encontrar el producto con menor stock y el de mayor stock.
//• Separar los productos perecederos y evaluar cuáles están próximos a vencerse.
//• Crear un reporte de categorías indicando cuántos productos hay en cada una.
//• Aplicar una función de reducción para determinar el valor total del inventario.
//El aprendiz debe analizar cuidadosamente toda la información y aplicar la lógica indicada.

//Se declara el arreglo de inventario  
let inventario = [
    { id: 1, nombre: "Leche", categoria: "Lacteos", stock: 10, precio: 3000, perecedero: true, fechaVencimiento: "2026-04-01" },
    { id: 2, nombre: "Arroz", categoria: "Granos", stock: 50, precio: 2000, perecedero: false, fechaVencimiento: null },
    { id: 3, nombre: "Queso", categoria: "Lacteos", stock: 5, precio: 8000, perecedero: true, fechaVencimiento: "2026-03-28" },
    { id: 4, nombre: "Pan", categoria: "Panaderia", stock: 20, precio: 1500, perecedero: true, fechaVencimiento: "2026-03-27" }
];

//Creamos la función control inventario para saber cuando debemos retirar un producto, ajustar los precios o marcar alertas 
function controlInventario(producto) {

    //Si el stock es muy bajo debemos retirarlo
    if (producto.stock < 5) {
        return "retirar";
    }

    //Si es un alimento perecedero y tiene poco stock debemos estar pendientes o vigilar
    if (producto.perecedero && producto.stock < 15) {
        return "vigilar";
    }

    //Si tiene mucho stock es estable
    if (producto.stock > 40) {
        return "estable";
    }

    return "ajustar precio";
}

//Creamos la función principal llamada procesarInventario donde creamos varios objetos para almacenarlos por categoría, acción o a vencer, creamos otro para la saber cual es la fecha actual
function procesarInventario(inventario, callback) {

    let acciones = {};
    let categorias = {};
    let perecederosProximos = [];

    let hoy = new Date();

    
    let procesados = inventario.map(prod => {
        //Se aplica el callback para obtener la cción
        let accion = callback(prod);

        // Si la acción aún no existe, se crea un arreglo
        if (!acciones[accion]) {
            acciones[accion] = [];
        }

        //Se agrega el producto a su grupo
        acciones[accion].push(prod);

        // Si la categorpia no existe, inicia en 0 y suma 1
        categorias[prod.categoria] = (categorias[prod.categoria] || 0) + 1;

        // Verificamos el vencimiento (próximos 5 días)
        if (prod.perecedero && prod.fechaVencimiento) {
            let fecha = new Date(prod.fechaVencimiento);
            
            //Calculamos la diferencia en días
            let diffDias = (fecha - hoy) / (1000 * 60 * 60 * 24);

            //Si vence en 5 días o menos se alerta
            if (diffDias <= 5) {
                perecederosProximos.push(prod);
            }
        }

        //Se retorna el resultado
        return { ...prod, accion };
    });

    // Mayor y menor stock
    let mayorStock = inventario.reduce((max, prod) =>
        prod.stock > max.stock ? prod : max
    );

    let menorStock = inventario.reduce((min, prod) =>
        prod.stock < min.stock ? prod : min
    );

    // Valor total inventario
    let valorTotal = inventario.reduce((total, prod) =>
        total + (prod.precio * prod.stock), 0
    );

    return {
        acciones,
        perecederosProximos,
        mayorStock,
        menorStock,
        categorias,
        valorTotal
    };
}

//Llamamos la función principal con el inventario y el callback
let reporte = procesarInventario(inventario, controlInventario);

console.log(reporte);