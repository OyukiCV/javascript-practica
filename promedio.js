// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];

// let sumaLista1 = 0; //variable donde se guardará el resultado del for

// //ciclo for para sumar las cantidades del array
// for (let index = 0; index < lista1.length; index++) {
//     sumaLista1 = sumaLista1 + lista1[index];

// }

// //variable para calcular el promedio del for array
// const promedioLista1 = sumaLista1 / lista1.length;

// *//funcion para calcular la media que une el ciclo for y el promedio de la lista*

// function calcularMediaAritmetica(lista) {
//     let sumaLista = 0;

//     for (let i = 0; i < lista.length; i++) {
//         sumaLista = sumaLista + lista[i];

//     }
//     const promedioLista = sumaLista / lista.length;

//     return promedioLista;
// }

//en consola -ejemplo-
//calcularMediaAritmetica([10,20,30,40]) //25

/**/
/*Otra alternativa al ciclo for, con metodo reduce*/

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
      }
  )
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}
