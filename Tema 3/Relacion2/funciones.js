//! Ejercicio 1
function encontrarMedio(numeros) {
  numeros.sort((a, b) => a - b);

  const longitud = numeros.length;
  const mitad = Math.floor(longitud / 2);

  if (longitud % 2 != 0) {
    return numeros[mitad];
  } else {
    return numeros[mitad - 1];
  }
}

//! Ejercicio 3
function randomArray(n){
    let array = [];
    for(let i = 0; i < n; i++){
        array.push(Math.floor(Math.random()*100) + 1);
    }
    return array;
}

//! Ejercicio 6
function buscarPalabra() {
  let palabra = prompt("Ingrese la palabra que desea buscar:");

  let textos = document.querySelectorAll("p");
  let contenidoCompleto = "";
  for (let i = 0; i < textos.length; i++) {
    contenidoCompleto += textos[i].innerText + " ";
  }

  let existe = contenidoCompleto.includes(palabra);
  let resultado = document.getElementById("resultado");

  if (existe) {
    resultado.textContent = 'La palabra "' + palabra + '" existe en el texto.';
  } else {
    resultado.textContent =
      'La palabra "' + palabra + '" no existe en el texto.';
  }
}

//! Ejercicio 7
function ordenarBurbuja(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function eliminarDuplicados(array) {
  let arraySinDuplicados = [];
  for (let i = 0; i < array.length; i++) {
    if (!arraySinDuplicados.includes(array[i])) {
      arraySinDuplicados.push(array[i]);
    }
  }
  return arraySinDuplicados;
}