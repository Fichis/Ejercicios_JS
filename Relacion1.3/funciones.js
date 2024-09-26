//! Ejercicio 1
function sum() {
  let total = 0;
  //? Uso el array que tienen todas las funciones (arguments) para sumar cada argumento que pones
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

//! Ejercicio 2
function addOnlyNums() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == "number") {
      total += arguments[i];
    }
  }
  return total;
}

//! Ejercicio 3
function countTheArgs() {
  return arguments.length - 1;
}

//! Ejercicio 4
function combineTwoArrays(array1, array2) {
  //? Directamente uso el spread operator para juntar los arrays:
  return [...array1, ...array2];
}

//! Ejercicio 5
function sumEveryOther() {
  let total = 0;
  //? Uso el array que tienen todas las funciones (arguments) para sumar cada argumento que pones
  for (let i = 0; i < arguments.length; i++) {
    //? Si el argumento es par...
    if (i % 2 == 0) {
      total += arguments[i];
    }
  }
  return total;
}

//! Ejercicio 6
function divisible(num) {
  let bandera = false;
  if (num % 3 == 0) {
    bandera = true;
  }
  return bandera;
}

//! Ejercicio 7
/**
 * Función que devuelve true si "num" es divisible entre "divisibleEntre".
 * @param {*} num El número
 * @param {*} divisibleEntre El numero que quieres comprobar que el parametro num sea divisible.
 * @returns True si el número es divisible, y False si no lo es
 */
function divisibleEntre(num, divisibleEntre) {
  let bandera = false;
  if (num % divisibleEntre == 0) {
    bandera = true;
  }
  return bandera;
}

//! Ejercicio 8
function rango(valor, rangoInf, rangoSup) {
  let bandera = false;
  if (valor >= rangoInf && valor <= rangoSup) {
    bandera = true;
  }
  return bandera;
}

//! Ejercicio 9
function tieneTresDigitos(num) {
  let bandera = false;
  let caracteres = "" + num;
  if (caracteres.length == 3) {
    bandera = true;
  }
  return bandera;
}

//! Ejercicio 10
function areaRectangulo(lado1, lado2) {
  return lado1 * lado2;
}

//! Ejercicio 11
function IMC(kg, altura) {
  let mCuadrado = altura * altura;
  return kg / mCuadrado;
}

//! Ejercicio 12
function precioFinal(precioOriginal, descuento) {
  let descFinal = descuento / 100;
  return precioOriginal * descFinal;
}

//! Ejercicio 13
function factorial(num) {
  let resultado = num;
  for (let i = 1; i < num; i++) {
    resultado *= num - i;
  }
  return resultado;
}
