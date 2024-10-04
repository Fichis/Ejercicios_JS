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
    const discriminante = b * b - 4 * a * c;
    let res = [];
    if (discriminante < 0) {
      res[0] = "No hay soluciones reales";
    }

    const raiz = Math.sqrt(discriminante);
    const res1 = (-b + raiz) / (2 * a);
    const res2 = (-b - raiz) / (2 * a);
    res.push(res1, res2);
    return res;
}
