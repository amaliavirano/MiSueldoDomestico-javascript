async function obtenerValorSeleccionado() {
    let categoria = document.getElementById("opcionSelect").value;
    let horasTrabajadas = Number(document.getElementById("horasTrabajadas").value);
    let antiguedad = Number(document.getElementById("antiguedad").value);

    try {
        const response = await fetch('data/domesticas.json');
        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status}`);
        }

        const data = await response.json();
        const categoriaData = data.find(item => item.categoria === categoria);

        /* console.log("Valor de la categoría seleccionada: " + categoria);
        console.log("Datos del archivo JSON: ", data); */

        if (!categoriaData) {
            console.error("Categoría no encontrada en el archivo JSON.");
            return;
        }

        let sueldoBase = (categoriaData.sueldo / 192) * horasTrabajadas;
        let resultado = sueldoBase * (1 + antiguedad / 100);

        let antiguedadText = (antiguedad === 0) ? "sin antigüedad" : (antiguedad === 1) ? "con 1 año de antigüedad" : `con ${antiguedad} años de antigüedad`;

        console.log(`La categoría profesional seleccionada es ${categoria} y las horas trabajadas son ${horasTrabajadas}, ${antiguedadText}. El sueldo calculado es $${resultado.toFixed(2)}.`);

        let h2 = document.createElement("h2");
        h2.textContent = `La categoría profesional seleccionada es ${categoria} y las horas trabajadas son ${horasTrabajadas}, ${antiguedadText}. El sueldo calculado es $${resultado.toFixed(2)}.`;

        
        h2.classList.add("mt-3", "fw-bold", "resultado");

        
        let resultadoDiv = document.getElementsByClassName("resultado");
        if (resultadoDiv.length > 0) {
            resultadoDiv[0].remove();
        }

        
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
        /* console.log(datos.categoria);
        console.log(datos.horastrabajadas);
        console.log(datos.antiguedad);
        console.log(datos.sueldocalculado); */

    } catch (error) {
        console.error("Error al obtener los datos: " + error.message);
    }
}


