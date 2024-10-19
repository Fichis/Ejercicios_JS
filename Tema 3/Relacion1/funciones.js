//! Ejercicio 1
/**
 * Funcion que devuelve el número maximo de los pasados por parámetro
 * @param {number} num1 Primer número
 * @param {number} num2 Segundo número
 * @param {number} num3 Tercer número
 * @param {number} num4 Cuarto número
 * @returns El número más grande.
 */
function maximo(num1, num2, num3, num4) {
  let max = 0;
  if (num1 > num2 && num1 > num3 && num1 > num4) {
    max = num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4) {
    max = num2;
  } else if (num3 > num1 && num3 > num2 && num3 > num4) {
    max = num3;
  }else {
    max = num4;
  }
  return max;
}


//! Ejercicio 2
/**
 * The function "lanzamiento" generates a random number between 1 and 6.
 * @returns A random number between 1 and 6, inclusive.
 */
function lanzamiento (){
    return Math.floor(Math.random()*6) + 1;
}

//! Ejercicio 4
function volumenEsfera(radio) {
  return ((4/3) * Math.PI * Math.pow(radio, 3)).toFixed(3);
}

//! Ejercicio 5
function areaEsfera(radio) {
  return (4 * Math.PI * Math.pow(radio, 2)).toFixed(3);
}

//! Ejercicio 6
function potenciaRecursiva(base, exponente){
  if(exponente == 0){
    return 1;
  }else{
    return base * potenciaRecursiva(base, exponente-1);
  }
}

//! Ejercicio 7
function factorialRecursivo(numero){
  if(numero < 0){
    return false
  }
  if(numero == 1 || numero == 0){
    return 1;
  }else {
    return numero * factorialRecursivo(numero - 1);
  }
}