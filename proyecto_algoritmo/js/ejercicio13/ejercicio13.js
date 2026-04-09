// Ejercicio 13: Control de gastos y análisis financiero
// Enunciado analítico:
// Una persona desea analizar sus gastos del mes para identificar hábitos financieros. El
// programa debe calcular el total gastado, la categoría más costosa y si alguna categoría
// supera el 40% del gasto total.
// Requerimientos:
// • Usar un arreglo con objetos de gastos.
// • Sumar montos por categoría.
// • Calcular porcentajes.
// • Retornar reporte financiero.

// Entradas:
// • Número de gastos.
// • Categoría y monto de cada gasto.
// Salidas:
// • Total gastado.
// • Categoría más costosa.
// • Alertas de desbalance financiero.

function analizarFinanzas(gastos) {
    try {
        if (!gastos || gastos.length === 0) {
            throw new Error("no hay gastos registrados");
        }

        // 1. calcular el total gastado
        let totalGeneral = 0;
        for (const gasto of gastos) {
            totalGeneral += gasto.monto;
        }

        // 2. sumar montos por categoria de forma manual
        let categoriasSumadas = {};
        for (const gasto of gastos) {
            let cat = gasto.categoria;
            if (categoriasSumadas[cat]) {
                categoriasSumadas[cat] += gasto.monto;
            } else {
                categoriasSumadas[cat] = gasto.monto;
            }
        }

        // 3. identificar la categoria mas costosa y revisar desbalance
        let categoriaMasCara = "";
        let montoMaximo = 0;
        let alertas = [];

        for (let cat in categoriasSumadas) {
            let montoCat = categoriasSumadas[cat];

            // buscar la mas cara
            if (montoCat > montoMaximo) {
                montoMaximo = montoCat;
                categoriaMasCara = cat;
            }

            // revisar si supera el 40% del total
            let porcentaje = (montoCat / totalGeneral) * 100;
            if (porcentaje > 40) {
                alertas.push("alerta: la categoria " + cat + " supera el 40% del gasto total");
            }
        }

        // 4. mostrar el reporte
        console.log("resumen financiero:", {
            total: totalGeneral,
            masCostosa: categoriaMasCara,
            alertas: alertas
        });

        alert(
            "REPORTE FINANCIERO\n" +
            "-------------------\n" +
            "Total gastado: " + totalGeneral + "\n" +
            "Categoria mas costosa: " + categoriaMasCara + " (" + montoMaximo + ")\n" +
            (alertas.length > 0 ? alertas.join("\n") : "gastos equilibrados")
        );

    } catch (error) {
        alert("error al procesar: " + error.message);
    }
}

// datos de prueba
const misGastos = [
    { categoria: "comida", monto: 200 },
    { categoria: "transporte", monto: 50 },
    { categoria: "comida", monto: 300 }, // sumara 500 en comida
    { categoria: "ocio", monto: 100 },
    { categoria: "arriendo", monto: 800 } // esta deberia disparar la alerta
];

// ejecutar
analizarFinanzas(misGastos);

