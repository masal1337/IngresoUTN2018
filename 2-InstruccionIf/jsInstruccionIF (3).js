function Mostrar() {
    //tomo la edad  

    var edad;

    edad = document.getElementById("edad").value;

    if (edad >= 18) {
        alert("¡Sos mayor de edad!");
    } else if (edad >= 13) {

        alert("¡Eres menor de edad!")
    }

}//FIN DE LA FUNCIÓN