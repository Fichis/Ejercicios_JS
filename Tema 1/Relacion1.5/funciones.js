//! Ejercicio 1 (6)
function onlyUniques(...args) {
  const uniqueValues = new Set(args);
  return Array.from(uniqueValues);
}

//! Ejercicio 2 (7)
function squareAndSum(...args) {
  let resultado = 0;
  for (let i = 0; i < args.length; i++) {
    resultado += Math.pow(args[i], 2);
  }
  return resultado;
}
