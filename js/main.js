
const empleadasDomesticas = [
    { categoria: "Primera Categoria", Descripcion: "tareas de supervisión", Sueldo: 159074 },
    { categoria: "Segunda Categoria", Descripcion: "tareas específicas", Sueldo: 147788.50 },
    { categoria: "Tercera Categoria", Descripcion: "tareas como casera", Sueldo: 144191.5 },
    { categoria: "Cuarta Categoria", Descripcion: "tareas de cuidado de personas", Sueldo: 144191.5 },
    { categoria: "Quinta Categoria", Descripcion: "tareas generales", Sueldo: 129670 },
];
/* for (let i = 0; i < empleadasDomesticas.length; i++) {
    console.log(`categoria: ${empleadasDomesticas[i].categoria}, descripcion: ${empleadasDomesticas[i].Descripcion},sueldo: ${empleadasDomesticas[i].Sueldo} `);
} */


function obtenerValorSeleccionado() {
    let sueldoBase;
    let categoria = document.getElementById("opcionSelect").value;
    let horasTrabajadas = Number(document.getElementById("horasTrabajadas").value);
    let antiguedad = Number(document.getElementById("antiguedad").value);

    if (categoria == "Categoria 1") {
        sueldoBase = (empleadasDomesticas[0].Sueldo / 192) * horasTrabajadas;

    } else if (categoria == "Categoria 2") {
        sueldoBase = (empleadasDomesticas[1].Sueldo / 192) * horasTrabajadas;

    } else if (categoria == "Categoria 3") {
        sueldoBase = (empleadasDomesticas[2].Sueldo / 192) * horasTrabajadas;

    } else if (categoria == "Categoria 4") {
        sueldoBase = (empleadasDomesticas[3].Sueldo / 192) * horasTrabajadas;

    } else if (categoria == "Categoria 5") {
        sueldoBase = (empleadasDomesticas[4].Sueldo / 192) * horasTrabajadas;

    }

    let resultado = sueldoBase * (1 + antiguedad / 100);

    console.log("La categoria profesional seleccionada es " + categoria + ", las horas trabajadas son " + horasTrabajadas + ", con una antiguedad de " + antiguedad + " años , el sueldo calculado es " + resultado.toFixed(2));
    let h2 = document.createElement("h2");
    h2.textContent = "La categoria profesional seleccionada es " + categoria + ", las horas trabajadas son " + horasTrabajadas + ", con una antiguedad de " + antiguedad + " años , el sueldo calculado es " + resultado.toFixed(2);
    ;

    document.body.appendChild(h2);

    let CalculoSueldo = {
        categoria: categoria,
        horastrabajadas: horasTrabajadas,
        antiguedad: antiguedad,
        sueldocalculado: resultado,
    }
    let CalculoSueldoJSON = JSON.stringify(CalculoSueldo);

    localStorage.setItem("sueldo calculado", CalculoSueldoJSON);


    let datosJSON = localStorage.getItem("sueldo calculado");
    let datos = JSON.parse(datosJSON);
    console.log(datos.categoria);
    console.log(datos.horastrabajadas);
    console.log(datos.antiguedad);
    console.log(datos.sueldocalculado);
}



document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("miBoton");


    boton.addEventListener("click", function (event) {
        event.preventDefault();

    });
})



