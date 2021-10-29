//Cálculo cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

// //perimetro
// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");
/*funcion de perimetro. Convertimos la variable perimetroCuadrado a función, lado=ladoCuadrado*/ 
function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado(); //llamar a la funcion

// //área
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + " cm/2");
/*funcion de area*/ 
function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


//Cálculo de un triangulo

console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es " + alturaTriangulo);

//perimetro

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triángulo es: " +  perimetroTriangulo + "cm");
/*funcion de perimetro*/ 
function perimetroTriangulo(ladoA, ladoB, base) {
    return lado + ladoB + base;
}

//area
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + " cm/2");
/*funcion area */
function areaTriangulo(base, altura) {
    return (base * altura) / 2;   
}

console.groupEnd();


//Cálculo de un circulo

console.group("Circulo");

//radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo);

//diámetro

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo);
/*funcion diametro*/
function diametroCirculo(radio) {
    return radio * 2;
}

//pi
const pi = Math.PI;

// //circunferencia
// const perimetroCirculo = diametroCirculo * pi;
// console.log("La circunferencia del circulo es: " + perimetroCirculo);
/*Funcion circunferencia */
function perimetroCirculo(radio) {
    //dentro de una variable(diametro) mandamos llamar una funcion(diametroCirculo())
    const diametro = diametroCirculo(radio); 
    return diametro * pi;
}

// perimetroCirculo(20)
// 62.83185307179586


// //área
// const areaCirculo = (radioCirculo * radioCirculo) * pi; 
// console.log("El área del circulo es: " + areaCirculo + " cm/2");
/*funcion circunferencia*/
function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();

//conectamos con el html

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");//obtenemos el id del input
    const value = input.value;//obtenemos el valor ingresado del id

    //llamamos a la funcion previamente declarada arriba
    const area = areaCuadrado(value); 
    alert(area);
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");//obtenemos el id del input
    const value = input.value;//obtenemos el valor ingresado del id

    //llamamos a la funcion previamente declarada arriba
    const perimetro = perimetroCuadrado(value); 
    alert(perimetro);
}