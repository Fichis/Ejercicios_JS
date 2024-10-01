
/**
 * Función que cuenta cuántos caracteres hay en una determinada cadena
 * @param {string} cadena La cadena a revisar
 * @returns {number} El número de veces que se repiten los caracteres en la cadena
 */
function cuentaCaracteres(cadena) {
  let contador = 0;
  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < cadena.length; j++) {
      if (cadena[j] == arguments[i]) {
        contador++;
      }
    }
  }
  return contador;
}
