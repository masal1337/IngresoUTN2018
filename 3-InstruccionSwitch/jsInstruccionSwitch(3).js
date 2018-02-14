function Mostrar() {
    //tomo el mes 
    var mesDelAño = document.getElementById('mes').value;


    switch (mesDelAño) {
        case "Febrero":

            alert("Este mes no tiene mas de 29 dìas!");
            break;


        default:

            alert("Este mes tiene màs de 30 dias!");

    }



}//FIN DE LA FUNCIÓN