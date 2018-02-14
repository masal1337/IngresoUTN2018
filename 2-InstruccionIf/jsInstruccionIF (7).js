function Mostrar() {
    //tomo la edad  

    var estado = document.getElementById("estadoCivil").value;
    var edad = document.getElementById("edad").value;

    if (edad <= 17 && estado !== ("Soltero")) {

        alert("Es muy pequeño para no ser soltero");

    }

}//FIN DE LA FUNCIÓN