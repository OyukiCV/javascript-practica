//obtener la mediana de un arreglo
//recordar que la mediana son los dos numeros del centro de una lista, divididos entre 2

//funcion para calcular una media
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// const lista1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];

// //var para calcular la mediana, aqui parseInt ayuda a devolver un numero entero
// //evitando errores si la lista no tiene elementos par 
// const mitadLista1 = parseInt(lista1.length / 2);

// //funcion para saber si es par devuelve true o impar devuelve false
// function esPar(numerito) {
//     //si numerito dividido entre 2 da cero, es decir no hay residuo(decimales)
//     if (numerito % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// //variable mediana, solo la declaramos
// let mediana;

// //validamos si lista1 es par
// if (esPar(lista1.length)) {
//     //-1 porque la posicion de mitadLista1 arroja posicion 2 y 
//     //necesitamos retroceder una posicion para tomar los dos num de enmedio
//     const elemento1 = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1]; //
//     // necesitamos dos elementos 
//     // -el promedio
//     const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

//     // -mediana
//     mediana = promedioElemento1y2;

// } else {
//     //posicion mitad dentro de lista1
//     //-mediana
// }



//RETO
//convertir lo anterior a funcion y ordenar la lista con sort
//1ero ordenar lista con sort

/** */
function obtenerMediana(lista) {
    const listaOrdenada = lista.sort(function (a, b) {
        return a - b;
    });
    console.log("array ordenado " + listaOrdenada);

    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    };

    //variable mediana, solo la declaramos
    let mediana;

    //validamos si lista es par
    if (esPar(listaOrdenada.length)) {

        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista]; //
     
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        // mediana
        mediana = promedioElemento1y2;

    } else {
        mediana =  listaOrdenada[mitadLista]; //
       
    }
    return mediana;
};