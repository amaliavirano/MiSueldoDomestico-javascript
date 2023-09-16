
let CategoriaSueldo = Number(prompt("Por favor, ingresar categoría profesional"));

let horasTrabajadas = Number(prompt("Por favor, ingresar horas trabajadas en el mes"));

let sueldoBase = 1;

const empleadasDomesticas = [
    { categoria: "Primera Categoria", Descripcion: "tareas de supervisión", Sueldo: 159074 },
    { categoria: "Segunda Categoria", Descripcion: "tareas específicas", Sueldo: 147788.50 },
    { categoria: "Tercera Categoria", Descripcion: "tareas como casera", Sueldo: 144191.5},
    { categoria: "Cuarta Categoria", Descripcion: "tareas de cuidado de personas", Sueldo: 144191.5},
    { categoria: "Quinta Categoria", Descripcion: "tareas generales", Sueldo: 129670 },
];


if (CategoriaSueldo == 1) {
    sueldoBase = (empleadasDomesticas[CategoriaSueldo - 1].Sueldo / 192 * horasTrabajadas)

    alert("Tu sueldo total es $" + sueldoBase + " correspondiente a la " + empleadasDomesticas[CategoriaSueldo - 1].categoria + " que realiza  " + empleadasDomesticas[CategoriaSueldo - 1].Descripcion)
    console.log("El sueldo calculado es " + sueldoBase);

} else if (CategoriaSueldo == 2) {
    sueldoBase = (empleadasDomesticas[CategoriaSueldo - 1].Sueldo / 192 * horasTrabajadas)

    alert("Tu sueldo total es $" + sueldoBase + " correspondiente a la " + empleadasDomesticas[CategoriaSueldo - 1].categoria + " que realiza  " + empleadasDomesticas[CategoriaSueldo - 1].Descripcion)
    console.log("El sueldo calculado es " + sueldoBase);

} else if (CategoriaSueldo == 3) {
    sueldoBase = (empleadasDomesticas[CategoriaSueldo - 1].Sueldo / 192 * horasTrabajadas)

    alert("Tu sueldo total es $" + sueldoBase + " correspondiente a la " + empleadasDomesticas[CategoriaSueldo - 1].categoria + " que realiza  " + empleadasDomesticas[CategoriaSueldo - 1].Descripcion)
    console.log("El sueldo calculado es " + sueldoBase);

} else if (CategoriaSueldo == 4) {
    sueldoBase = (empleadasDomesticas[CategoriaSueldo - 1].Sueldo / 192 * horasTrabajadas)

    alert("Tu sueldo total es $" + sueldoBase + " correspondiente a la " + empleadasDomesticas[CategoriaSueldo - 1].categoria + " que realiza  " + empleadasDomesticas[CategoriaSueldo - 1].Descripcion)
    console.log("El sueldo calculado es " + sueldoBase);

} else if (CategoriaSueldo == 5) {
    sueldoBase = (empleadasDomesticas[CategoriaSueldo - 1].Sueldo / 192 * horasTrabajadas)

    alert("Tu sueldo total es $" + sueldoBase + " correspondiente a la " + empleadasDomesticas[CategoriaSueldo - 1].categoria + " que realiza  " + empleadasDomesticas[CategoriaSueldo - 1].Descripcion)
    console.log("El sueldo calculado es " + sueldoBase);

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

    let resultado = _SueldoCalculado * (1 + _Antiguedad / 100);

    alert(" El sueldo calculado con antiguedad es igual a " + resultado);
    console.log("El sueldo total de la empleada doméstica es " + resultado);
}


let numero1 = prompt("Ingresa sueldo calculado");
let numero2 = prompt("Ingresa su antiguedad en años");


SueldoTotal(numero1, numero2);














