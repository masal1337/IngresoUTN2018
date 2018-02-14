function Mostrar() {
    //tomo el mes 
    var mesDelAño = document.getElementById('mes').value;


    switch (mesDelAño) {
        case "Julio":
        case "Agosto":
            
                alert("Abrigate que hace frio!");
                break;
            

        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Mayo":
        case "Abril":
        case "Mayo":
        case "Junio":
            
                alert("Falta poco para el invierno!");
                break;
            
        case "Septiembre":
        case "Noviembre":
        case "Octubre":
        case "Diciembre":
            

                alert("Ya pasamos el invierno, ahora calor!");
            
    }


}//FIN DE LA FUNCIÓN