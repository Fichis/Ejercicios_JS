//! Ejercicio 1.1
function invierteCadena(cad_arg){
    let reversa = "";
    for (let i = cad_arg.length - 1; i >= 0; i--) {
      reversa += cadena[i];
    }
    return reversa;
}

//! Ejercicio 1.2
function inviertePalabras(cad_arg){
    let palabras = cad_arg.split(" ");
    let reversa = "";
    for(let i = 0; i < palabras.length; i++){
        reversa += " ";
        for(let j = palabras[i].length - 1; j >= 0; j--){
            reversa +=palabras[i][j];
        }
    }
    return reversa;
}

//! Ejercicio 1.3
function encuentraPalabraMasLarga(cad_arg){
    let palabras = cad_arg.split(" ");
    let arrContador = [];
    let contador = 0;
    let indiceMayor = 0;
    let palabraMayor;
    for(let i = 0; i < palabras.length; i++){
        for(let j = 0; j < palabras[i].length; j++){
            contador++;
        }
        arrContador.push(contador);
        contador = 0;
    }
    for(let i = 0; i < arrContador.length; i++){
        if(indiceMayor < arrContador[i]){
            indiceMayor = arrContador[i];
            palabraMayor = palabras[i];
        }
    }

    return palabraMayor;
}

//! Ejercicio 1.4
function filtraPalabrasMasLargas(cad_arg, i){
    let palabras = cad_arg.split(" ");
    let contadorPalabra = 0;
    let contadorResultado = 0;
    for (let iteracion = 0; iteracion < palabras.length; iteracion++){
        for(let j = 0; j < palabras[iteracion].length; j++){
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