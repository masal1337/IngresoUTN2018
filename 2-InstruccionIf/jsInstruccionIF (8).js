function Mostrar() {
    //tomo la edad  

    var edad = parseInt(document.getElementById("edad").value);
    var estado = document.getElementById("estadoCivil").value;

    if (edad > 17 && estado == "Soltero") {

        alert("Es soltero y NO es menor");

    }



}//FIN DE LA FUNCIÓN