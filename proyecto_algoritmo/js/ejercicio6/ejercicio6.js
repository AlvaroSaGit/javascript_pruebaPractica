/* Ejercicio 6: Cálculo modular de nómina
Enunciado analítico:
Una empresa requiere calcular el salario neto de un trabajador separando el proceso en
módulos independientes: salario base, deducciones y salario final.
Requerimientos:
• Crear tres funciones: calcularSalarioBase(), calcularDeducciones(), calcularNeto().
• Manejo de parámetros para conectar los módulos.
• Aplicar operaciones matemáticas.
• Retornar el salario final.
Entradas:
• Valor de hora.
• Horas trabajadas.
Salidas:
• Salario base.
• Total deducciones.
• Salario neto. */

//importamos la liberia de prompt-sync
import prompt from 'prompt-sync'
// permite la entrada de la terminal 
const salario = prompt();

// importamos las funciones de calcular base , deducciones y salario neto
import { calcularsalariobase, calculardeducciones, calcularneto } from './operaciones/index.js';

// le pedimos al usurio que ingrese cuanto es el valor por hora trabajada 
const valor_por_hora = parseFloat(salario("ingrese el valor por hora: "));
// le pedimos al usuario que ingrese cuantas horas trabajo en el dia 
const horas_trabajadas = parseFloat(salario("ingrese las horas trabajadas: "))


// llamamos alos modulos 
const salarioBase = calcularsalariobase(valor_por_hora, horas_trabajadas);
const deducciones = calculardeducciones(salarioBase);
const salarioneto = calcularneto(salarioBase, deducciones);
// imprimimos los resultados que requiere la empresa 
console.log("salario base: " + salarioBase)
console.log("total deducciones: " + deducciones)
console.log("salario neto: " + salarioneto)