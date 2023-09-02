
let CategoriaSueldo = Number(prompt("Por favor, ingresar categoría profesional"));
let horasTrabajadas = Number(prompt("Por favor, ingresar horas trabajadas"));
let sueldoBase = 1;

if (CategoriaSueldo == 1) {
    sueldoBase = (159074 / 192 * horasTrabajadas)

    console.log("El sueldo total de la empleada doméstica es " + sueldoBase)
} else if (CategoriaSueldo == 2) {
    sueldoBase = (147788.50 / 192 * horasTrabajadas)

    console.log("El sueldo total de la empleada doméstica es " + sueldoBase)
    alert("El sueldo calculado es " + sueldoBase)
} else if (CategoriaSueldo == 3 || CategoriaSueldo == 4) {
    sueldoBase = (144191.50 / 192 * horasTrabajadas)

    console.log("El sueldo total de la empleada doméstica es " + sueldoBase)
    alert("El sueldo calculado es " + sueldoBase)
} else if (CategoriaSueldo == 5) {
    sueldoBase = (129670 / 192 * horasTrabajadas)

    console.log("El sueldo total de la empleada doméstica es " + sueldoBase)
    alert("El sueldo calculado es " + sueldoBase)

} else {
    alert("Lo siento, no existe la categoría profesional " + CategoriaSueldo);


}



function SueldoTotal(_SueldoCalculado, _Antiguedad) {
    _SueldoCalculado = parseFloat(_SueldoCalculado);
    _Antiguedad = parseFloat(_Antiguedad);

    if (isNaN(_SueldoCalculado) || isNaN(_Antiguedad)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    var resultado = _SueldoCalculado * (1 + _Antiguedad / 100);

    alert(" El sueldo calculado con antiguedad es igual a " + resultado);
    console.log("El sueldo total de la empleada doméstica es " + resultado);
}


var numero1 = prompt("Ingresa sueldo calculado");
var numero2 = prompt("Ingresa su antiguedad en años");


SueldoTotal(numero1, numero2);




