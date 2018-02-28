/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var cantidad = parseInt (document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    var precio = parseInt(35);
    var precioCant = parseInt(precio * cantidad);
    var precioDesc;
    var precioFinal;
    switch (cantidad) {

        case 6: precioCant / 2;

        case 5:

            if (marca == "ArgentinaLuz") {

                precioDesc = precioCant * 1.40;
            }
            else {

                precioDesc = precioCant * 1.30;
            }

        case 4:

            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {

                precioDesc = precioCant * 1.25;

            } else {

                precioDesc = precioCant * 1.20;
            }

        case 3: if (marca == "ArgentinaLuz") {

            precioDesc = precioCant * 1.15;

        }

        else if (marca == "FelipeLamparas") {

            precioDesc = precioCant * 1.10;

        }
        else {

            precioDesc = precioCant * 1.05;
        }


        case 1:
        case 2:
            break;


            if (precioDesc > 120) {

                precioFinal = precioDesc * 1.10;
                document.getElementById("PrecioDescuento").value = ("IIBB Usted pago" + precioFinal)
            }

            document.getElementById("PrecioDescuento").value = 












    }
}
