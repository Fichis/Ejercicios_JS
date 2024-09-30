//! Ejercicio 1 (6)
function onlyUniues([...args]){

}

//! Ejercicio 2 (7)
function squareAndSum(){
    let resultado = 0;
    for(let i = 0; i < arguments.length; i++){
        arguments[i] = Math.pow(arguments[i], 2);
        resultado += arguments[i];
    }
    return resultado;
}