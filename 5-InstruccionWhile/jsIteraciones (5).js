function Mostrar() {

    var sexo = prompt("ingrese f ó m .");
    
    
    while (!(sexo == "m" || sexo == "f")) {

        sexo = prompt("Ese sexo no existe");


    }

    alert("Su sexo es " + sexo);



}//FIN DE LA FUNCIÓN