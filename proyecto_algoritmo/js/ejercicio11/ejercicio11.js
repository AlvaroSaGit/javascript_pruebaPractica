// Ejercicio 11: Resumen de mensajes usando destructuración

// Enunciado analítico:
// Una aplicación de mensajería requiere generar un resumen rápido de cada mensaje. Se
// debe extraer información puntual para mostrar un pequeño reporte al usuario.
// Requerimientos:
// • Usar destructuring para obtener remitente, contenido y fecha.
// • Crear una función generarResumen(mensaje).
// • Retornar el resumen construido.

// Entradas:
// • Datos completos del mensaje.
// Salidas:
// • Resumen: remitente, contenido breve y fecha.


function generarResumen(mensaje) {
    try {
        // usamos destructuring para sacar los datos especificos del objeto
        const { remitente, contenido, fecha } = mensaje;

        // validamos que los datos existan para que no salga vacio
        if (!remitente || !contenido || !fecha) {
            throw new Error("el mensaje no tiene todos los datos necesarios");
        }

        // cortamos el contenido para que sea un resumen breve (primeras 20 letras)
        const contenidoBreve = contenido.substring(0, 20) + "...";

        // armamos el reporte que pide el ejercicio
        const resumen = {
            de: remitente,
            texto: contenidoBreve,
            cuando: fecha
        };

        // mostramos el resultado
        console.log("reporte generado:", resumen);
        alert(
            "RESUMEN DE MENSAJE\n" +
            "-------------------\n" +
            "De: " + resumen.de + "\n" +
            "Mensaje: " + resumen.texto + "\n" +
            "Fecha: " + resumen.cuando
        );

        return resumen;

    } catch (error) {
        console.error("error:", error.message);
        alert("no se pudo crear el resumen.");
    }
}

// datos de prueba externos
const mensajeRecibido = {
    id: 505,
    remitente: "juan perez",
    contenido: "hola, te escribo para confirmar que ya recibi los documentos del proyecto",
    fecha: "2026-04-09",
    leido: false
};

// ejecutamos la funcion
generarResumen(mensajeRecibido);