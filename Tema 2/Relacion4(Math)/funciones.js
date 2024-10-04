/**
 * Funcion que genera un número aleatorio entre min y max
 * @param {number} min 
 * @param {number} max 
 * @returns El numero aleatorio de tipo float entre min y max
 */
function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Funcion que calcula la hipotenusa de un triángulo dados los catetos
 * @param {number} cateto1 Valor en centímetros del cateto 1
 * @param {number} cateto2 Valor en centímetros del cateto 2
 * @returns La hipotenusa en centímetros del triangulo
 */
function pitagoras(cateto1, cateto2) {
    let hip2 = Math.pow(cateto1, 2) + Math.pow(cateto2, 2);
    return Math.sqrt(hip2);
}

/**
 * Funcion que realiza la ecuación de segundo grado dados los coeficientes
 * @param {number} a Valor del coeficiente de x2
 * @param {number} b Valor del coeficiente de x
 * @param {number} c Valor del coeficiente numeral
 * @returns Array de las 2 posibles soluciones
 */
function ec2Grado(a, b, c){
    const NUM = -4;
    const MENOS = -1;
    let raiz = Math.sqrt((NUM * a * c));
    let res1 = (MENOS * b + raiz) / (2 * a);
    let res2 = (MENOS * b - raiz) / (2 * a);
    let resultados = [];
    resultados.push(res1, res2);
    return resultados;
}
