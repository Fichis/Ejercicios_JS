//! Ejercicio 1

/**
 * Función que calcula tu edad en función de tu fecha de nacimiento.
 * @param {} birthYear Tu año de nacimiento
 * @returns Un texto mostrando qué edad podrías tener.
 */
function ageCalculator(birthYear) {
  let currentYear = new Date().getFullYear();
  return ( (currentYear - birthYear) + " or " + (currentYear - birthYear - 1) );
}

//! Ejercicio 2

/**
 * Función que calcula cuántas unidades necesitarás en función de una media de unidades/dia de tu snack, tu edad y la edad maxima a la que llegarás
 * @param {} currentAge Tu edad actual
 * @param {} maximumAge Edad máxima a la que quieres llegar
 * @param {} estimatedAmount Media de cantidad de snacks/dia que consumes
 * @returns Unidades de snacks que necesitarás.
 */
function supplyCalculator(currentAge, maximumAge, estimatedAmount) {
  let resultado = (maximumAge - currentAge) * 365 * estimatedAmount;
  return (resultado);
}

//! Ejercicio 3

/**
 * Función que calcula el valor de tu circunferencia a partir del radio.
 * @param {} radio El radio de tu círculo
 * @returns El total de tu circunferencia
 */
function circumference(radio) {
  const PI = Math.PI;
  return 2 * PI * radio;
}

/**
 * Funcion que calcula el área de un círculo en función de su radio
 * @param {} radio El radio de tu círculo
 * @returns El área de tu círculo.
 */
function area(radio) {
  const PI = Math.PI;
  return PI * radio * radio;
}

//! Ejercicio 4

/**
 * Función que convierte una temperatura a grados Celsius y Fahrenheit.
 * @param {} temperatura La temperatura a convertir
 * @returns La temperatura convertida a Celsius y Fahrenheit.
 */
function convertTemperature(temperatura) {
  let resultadoF = (temperatura * 9) / 5 + 32;
  let resultadoC = ((temperatura - 32) * 5) / 9;
  let mensaje = `${temperatura}ºC is ${resultadoF}ºF. <br> ${temperatura}ºF is ${resultadoC}ºC.`;
  return mensaje;
}
