function Mostrar() {

    var sexo = prompt("ingrese f ó m .");


    while (sexo != "m" && sexo != "f" && sexo != "F" && sexo != "M") {

        sexo = prompt("Error. Reingrese. Ese sexo no existe");


    }
    if (sexo == "f") {
        sexo = "masculino";

    }
    else {

        sexo = "femenino";

    }


    document.getElementById("Sexo").value = ("Tu sexo es " + sexo);



}//FIN DE LA FUNCIÓN