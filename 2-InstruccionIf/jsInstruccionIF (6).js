function Mostrar() {
    //tomo la edad  

    var edad = document.getElementById("edad").value;

    if (edad >= 18) {
        alert("¡Sos mayor de edad!");
    }

    if (edad < 18) {
        alert("Sos un adolescente!");

    }

    if (edad < 13) {
        alert("Sos un niño!");

    }


}//FIN DE LA FUNCIÓN