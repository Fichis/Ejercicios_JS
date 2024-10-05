//! Ejercicio 1.1
function invierteCadena(cad_arg) {
  let reversa = "";
  for (let i = cad_arg.length - 1; i >= 0; i--) {
    reversa += cadena[i];
  }
  return reversa;
}

//! Ejercicio 1.2
function inviertePalabras(cad_arg) {
  let palabras = cad_arg.split(" ");
  let reversa = "";
  for (let i = 0; i < palabras.length; i++) {
    reversa += " ";
    for (let j = palabras[i].length - 1; j >= 0; j--) {
      reversa += palabras[i][j];
    }
  }
  return reversa;
}

//! Ejercicio 1.3
function encuentraPalabraMasLarga(cad_arg) {
  let palabras = cad_arg.split(" ");
  let arrContador = [];
  let contador = 0;
  let indiceMayor = 0;
  let palabraMayor;
  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < palabras[i].length; j++) {
      contador++;
    }
    arrContador.push(contador);
    contador = 0;
  }
  for (let i = 0; i < arrContador.length; i++) {
    if (indiceMayor < arrContador[i]) {
      indiceMayor = arrContador[i];
      palabraMayor = palabras[i];
    }
  }

  return palabraMayor;
}

//! Ejercicio 1.4
function filtraPalabrasMasLargas(cad_arg, i) {
  let palabras = cad_arg.split(" ");
  let contadorPalabra = 0;
  let contadorResultado = 0;
  for (let iteracion = 0; iteracion < palabras.length; iteracion++) {
    for (let j = 0; j < palabras[iteracion].length; j++) {
      contadorPalabra++;
      console.log("ContadorPalabra: " + contadorPalabra);
    }
    if (contadorPalabra >= i) {
      contadorResultado++;
    }
    contadorPalabra = 0;
    console.log(contadorResultado);
  }
  return contadorResultado;
}

//! Ejercicio 1.5
function cadenaBienFormada(cad_arg) {
  let resultado = "";
  for (let i = 0; i < cad_arg.length; i++) {
    if (i == 0) {
      resultado += cad_arg[i].toUpperCase();
      i++;
    }
    resultado += cad_arg[i].toLowerCase();
  }
  return resultado;
}

//! Ejercicio 2
function mayusOMinus(cad_arg) {
  let resultado = "";
  if (cad_arg == cad_arg.toUpperCase()) {
    resultado = "La cadena está formada sólo por mayúsculas.";
  } else if (cad_arg == cad_arg.toLowerCase()) {
    resultado = "La cadena está formada sólo por minúsculas.";
  } else {
    resultado =
      "La cadena está formada por una mezcla de mayúsculas y minúsculas";
  }
  return resultado;
}

//! Ejercicio 3
function apariciones(cad_arg, subcad_arg) {
  let contador = 0;
  let visor = "";
  for (let i = 0; i <= cad_arg.length - subcad_arg.length; i++) {
    for (let j = i; j < i + subcad_arg.length; j++) {
      visor += cadena.charAt(j);
    }
    if (subcad_arg == visor) {
      contador++;
    }
    visor = "";
  }
  return contador;
}

//! Ejercicio 4
function ordenaCadena(cad_arg) {
  const vocales = "aeiouAEIOU";
  let consonantes = "";
  let vocalesResult = "";

  for (let i = 0; i < cad_arg.length; i++) {
    let char = cad_arg[i];
    if (char != " ") {
      if (vocales.includes(char)) {
        vocalesResult += char;
      } else {
        consonantes += char;
      }
    }
  }
  return consonantes + vocalesResult;
}

//! Ejercicio 5
function eliminarRepetidos(cad_arg) {
  let resultado = "";
  for (let i = 0; i < cad_arg.length; i++) {
    let char = cad_arg[i];
    if (char != " " && resultado.indexOf(char) == -1) {
      resultado += char;
    }
  }
  return resultado;
}

//! Ejercicio 6
function buscaCadena(cad_arg, subcad_arg) {
  let pos = cad_arg.indexOf(subcad_arg);
  let resultado;
  if (pos != -1) {
    resultado = pos;
  } else {
    resultado = -1;
  }
  return resultado;
}

//! Ejercicio 7
function esPalindromo(cad_arg) {
  //? Elimino espacios en blanco
  cadenaAjustada = cad_arg.replace(/ /g, "");
  cadenaInvertida = invierteCadena(cadenaAjustada);

  return cadenaAjustada == cadenaInvertida;
}

//! Ejercicio 8
function cuentaPalabras(cad_arg) {
  let contador = 0;

  const palabras = cad_arg.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 0) {
      contador++;
    }
  }
  if (cad_arg.length == 0){
    contador = 0;
  }
  return contador;
}
