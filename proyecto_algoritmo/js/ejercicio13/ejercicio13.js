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
        // 1. sumar todo el dinero gastado (el total)
        let totalGeneral = 0;
        for (const g of gastos) {
            totalGeneral += g.monto;
        }

        // 2. buscar cual es el gasto individual mas caro
        let gastoMasCaro = gastos[0]; 
        for (const g of gastos) {
            if (g.monto > gastoMasCaro.monto) {
                gastoMasCaro = g;
            }
        }

        // 3. revisar si algun gasto solito supera el 40% del total
        let alertas = "";
        for (const g of gastos) {
            let porcentaje = (g.monto / totalGeneral) * 100;
            if (porcentaje > 40) {
                alertas += "- " + g.categoria + " es muy alto (" + porcentaje + "%)\n";
            }
        }

        // 4. mostrar resultados
        console.log("total:", totalGeneral);
        alert(
            "REPORTE FINANCIERO\n" +
            "total gastado: " + totalGeneral + "\n" +
            "el gasto mas alto fue en: " + gastoMasCaro.categoria + "\n\n" +
            "ALERTAS:\n" + (alertas || "todo bajo control")
        );

    } catch (error) {
        alert("error en el calculo");
    }
}

// datos de prueba simples
const misGastos = [
    { categoria: "comida", monto: 100 },
    { categoria: "transporte", monto: 50 },
    { categoria: "arriendo", monto: 500 } // este supera el 40%
];

analizarFinanzas(misGastos);

