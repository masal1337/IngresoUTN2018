function Mostrar() {
    //tomo el mes 
    var mesDelAño = document.getElementById('mes').value;


    switch (mesDelAño) {
        case "Febrero":


            alert(" ¡" + mesDelAño + " tiene 28 días!");
            break;


        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":


            alert(" ¡" + mesDelAño + " tiene 30 días!");
            break;

        default:


            alert(" ¡" + mesDelAño + " tiene 31 días!");

    }





}//FIN DE LA FUNCIÓN