/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var total = precio1 + precio2 + precio3;
    alert(total);
}
function Promedio() {
    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var total = precio1 + precio2 + precio3;
    var totalFinal = total / 3;
    alert(totalFinal);
}
function PrecioFinal() {
    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var total = precio1 + precio2 + precio3;
    var totalNeto = total * 0.21;
    var totalFinal = totalNeto + total;
    alert(totalFinal);

}