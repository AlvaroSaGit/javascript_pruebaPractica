// modulo 2: Deducciones = 12.5% SS + 10% impuestos
export function calculardeducciones(salarioBase) {
    // las deducciones son los descuentos que una empresa resta al salario bruto de un trabajador en el cual estan
    // salud, pension que se le llama seguridad social y el de los impuestos 
    // creamos una variable llamada salud ,pension y solidaridad  en el cual toma el salario base y lo multiplica por 0.125 que es el 12.5% en el cual estan dividos en 4% salud (Eps), 4% pension el ahorro y 4.5% solidaridad para los pobres sin pension 
    const salud_pension_y_solidaridad = salarioBase * 0.125;
    // creamos una variable llamada impuesto en el cual toma el salario base y lo multiplica por 0.10% que es el 10% de impuesto de la renta adelantado al gobierno 
    const impuestos = salarioBase * 0.10;
    // retornamos el total de deducciones a restar del salario bruto  del trabajdor  
    return salud_pension_y_solidaridad + impuestos;
}   