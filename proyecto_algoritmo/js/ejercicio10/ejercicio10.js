function fusionarUsuarios(listaA, listaB) {
    try {
        // revisamos que las listas existan
        if (!listaA || !listaB) {
            throw new Error("faltan las listas");
        }

        // juntamos todo con el operador spread como pide el ejercicio
        const todos = [...listaA, ...listaB];
        
        // aqui guardaremos los usuarios finales
        const listaLimpia = [];

        // recorremos todos los usuarios uno por uno
        for (const usuario of todos) {
            let encontrado = false;

            // revisamos si este usuario ya esta en nuestra lista limpia
            for (let i = 0; i < listaLimpia.length; i++) {
                // Se usa una lista vacia y se va comparando
                if (listaLimpia[i].documento === usuario.documento) {
                    encontrado = true;
                    
                    // si ya esta, contamos cuanta info tiene cada uno de forma manual
                    let contadorNuevo = 0;
                    for (let propiedad in usuario) { 
                        contadorNuevo++; 
                    }

                    let contadorViejo = 0;
                    for (let propiedad in listaLimpia[i]) { 
                        contadorViejo++; 
                    }

                    // si el que estamos revisando tiene mas datos, reemplazamos el viejo
                    if (contadorNuevo > contadorViejo) {
                        listaLimpia[i] = usuario;
                    }
                }
            }

            // si despues de revisar toda la lista limpia no estaba, lo agregamos
            if (encontrado === false) {
                listaLimpia.push(usuario);
            }
        }

        console.log("lista final:", listaLimpia);
        alert("fusion terminada. usuarios finales: " + listaLimpia.length);

    } catch (error) {
        console.error("error:", error.message);
        alert("no se pudo completar la fusion.");
    }
}

// datos de prueba genericos
const sistemaA = [
    { documento: "101", nombre: "usuario uno" },
    { documento: "102", nombre: "usuario dos", edad: 25 }
];

const sistemaB = [
    { documento: "101", nombre: "usuario uno", ciudad: "bucaramanga", tel: "555" },
    { documento: "103", nombre: "usuario tres" }
];

// ejecutar la funcion
fusionarUsuarios(sistemaA, sistemaB);