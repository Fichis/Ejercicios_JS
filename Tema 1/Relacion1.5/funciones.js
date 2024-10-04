//! Ejercicio 1 (6)
function soloUnicos(...args) {
  const valoresUnicos = [];

  for (let i = 0; i < args.length; i++) {
    if (!valoresUnicos.includes(args[i])) {
      valoresUnicos.push(args[i]); 
    }
  }

  return valoresUnicos;
}

//! Ejercicio 2 (7)
function squareAndSum(...args) {
  let resultado = 0;
  for (let i = 0; i < args.length; i++) {
    resultado += Math.pow(args[i], 2);
  }
  return resultado;
}
