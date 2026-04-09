// Ejercicio 12: Gestión de pacientes por prioridad
// Enunciado analítico:
// Un centro médico debe identificar al paciente con mayor prioridad para ser atendido. Si
// varios tienen la misma prioridad, debe seleccionarse al de mayor edad.
// Requerimientos:
// • Usar un arreglo de pacientes.
// • Buscar el paciente con mayor prioridad.
// • Resolver empates por edad.
// • Retornar el paciente seleccionado.
// Entradas:
// • Cantidad de pacientes.
// • Datos de cada paciente.
// Salidas:
// • Paciente con mayor prioridad.



function gestionarPacientes(listaPacientes) {
    try {
        // revisamos que la lista no este vacia
        if (!listaPacientes || listaPacientes.length === 0) {
            throw new Error("no hay pacientes en la lista");
        }

        // empezamos asumiendo que el primer paciente es el de mayor prioridad
        let elegido = listaPacientes[0];

        // recorremos el resto de la lista para comparar
        for (let i = 1; i < listaPacientes.length; i++) {
            let actual = listaPacientes[i];

            // regla 1: si el actual tiene prioridad mas alta (numero mayor)
            if (actual.prioridad > elegido.prioridad) {
                elegido = actual;
            } 
            // regla 2: si tienen la misma prioridad, miramos la edad
            else if (actual.prioridad === elegido.prioridad) {
                if (actual.edad > elegido.edad) {
                    elegido = actual;
                }
            }
        }

        // mostramos quien fue el seleccionado
        console.log("paciente seleccionado:", elegido);
        alert(
            "PACIENTE PARA ATENDER\n" +
            "nombre: " + elegido.nombre + "\n" +
            "prioridad: " + elegido.prioridad + "\n" +
            "edad: " + elegido.edad
        );

        return elegido;

    } catch (error) {
        alert("error: " + error.message);
    }
}

// datos de prueba
const listaDeEspera = [
    { nombre: "paciente a", edad: 20, prioridad: 2 },
    { nombre: "paciente b", edad: 45, prioridad: 5 }, // mas prioridad
    { nombre: "paciente c", edad: 60, prioridad: 5 }, // misma prioridad pero mas viejo
    { nombre: "paciente d", edad: 30, prioridad: 1 }
];

// ejecutamos
gestionarPacientes(listaDeEspera);