//ejemplo
// const precioOriginal= 120; //variable precio original
// const descuento = 18; //variable de porcentaja de descuento

//funcion para calcular el precio con descuento aplicado

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// //variable para calcular el porcentaje del precio con descuento aplicado
// const porcentajePrecioConDescuento = 100 - descuento;


// //variable del precio final ya con descuento
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

//console log con un objeto{}
// console.log({precioOriginal,
// descuento,
// porcentajePrecioConDescuento,
// precioConDescuento});

/*Funcion conectada al html */

function onClickButtonPriceDiscount(precio, descuento) {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value; 

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value; 

    //en una variable metemos la funcion calcularPrecioconDescuento previamente declarada 
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue); 

    //obtenemos el id del parrafo en html en donde se imprime el resultado
    const resultPrice = document.getElementById("resultPrice");
    //indicamos el texto y el resultado, se indica que se imprime en el espacio del id asignado
    resultPrice.innerText = "El precio con descuento es: $ " + precioConDescuento;
}