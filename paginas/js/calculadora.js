let planElegido = prompt("Elija un plan (esencial, intermedio o profesional)");
let papelería = prompt("¿Desea incluir servicios de papelería? (si o no)");
planElegido = planElegido.toUpperCase();
papelería = papelería.toUpperCase();
(precioFinal = 0).parseInt;
function calculadoraServicios(planElegido, papelería){
    if(planElegido == "ESENCIAL"){
        precioFinal = 10000
    }
    else if(planElegido == "INTERMEDIO"){
        precioFinal = 12000
    }
    else if(planElegido == "PROFESIONAL"){
        precioFinal = 15000
    }
    else{
        alert("ERROR, NO ELEGISTE UN PLAN DE SERVICIOS")
    }
    if(papelería == "SI"){
        precioFinal = parseInt(precioFinal)
        precioFinal += 7000
    }
    alert("El precio final es de " + precioFinal + " pesos")
}
calculadoraServicios(planElegido, papelería)