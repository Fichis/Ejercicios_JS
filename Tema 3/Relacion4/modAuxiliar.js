/** 
 * @name filterNumbersGreaterThan 
 * @description Filtra los números de un array que sean mayor a cierto número 
x dejando solo los que sean menores a este 
 * 
 * @param {number[]} numbers - Array de números a filtrar 
 * @param {number} filter - Número a partir del cuál filtrar los demás número
s 
 * @returns {Number[]} - Array de números filtrados menores a {filter} 
 * 
 * @example 
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4] 
 */
const filterNumbersGreaterThan = (numbers, filter) => {
    const arrResult = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < filter){
            arrResult.push(numbers[i]);
        }
    }
    return arrResult;
}

/** 
 * @name toHackerSpeak 
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que 
transformar las "a" en 4, las "e" en 3, las "i" 
 * en 1, las "o" en 0 y las "s" en 5 
 * 
 * @param {string} text  
 * @returns {String} - El texto convertido a "Hacker Speak" 
 *  
 * @example 
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w" 
 */ 
const toHackerSpeak = (text) => {
    let result = "";
    for(let i = 0; i < text.length; i++){
        switch(text[i]){
            case "a":
            case "A":
                result+=text[i]="4";
            break;
            case "e":
            case "E":
                result+=text[i]="3";
            break;
            case "i":
            case "I":
                result+=text[i]="1";
            break;
            case "o":
            case "O":
                result+=text[i]="0";
            break;
            case "s":
            case "S":
                result+=text[i]="5";
            default:
                result+=text[i];
        }
    }
    return result;
}

/** 
 * @name getFileExtension 
 * @description Obtiene la extensión de un archivo 
 * 
 * @param {string} file - El nombre del archivo a obtener la extensión  
 * @returns {String} - La extensión del archivo 
 *  
 * @example 
 *  getFileExtension("imagen.jpg") // returns "jpg" 
 */
const getFileExtension = (file) => {
    let extension = "";
    let separator = file.indexOf(".");
    for(let i = separator+1; i < file.length; i++){
        extension += file[i];
    }
    return extension;
}

/** 
 * @name flatArray 
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los 
ítems  
 * 
 * @param {[][]} arr - Array 2D a "aplanar"  
 * @returns {[]} - El array "aplanado" 
 *  
 * @example 
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5] 
 */
const flatArray = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            result.push(arr[i][j]);
        }
    }
    return result;
}

/** 
 * @name removeDuplicates 
 * @description Remueve duplicados de un array  
 * 
 * @param {[]} arr - Array con duplicados a remover 
 * @returns {[]} - El array resultante sin duplicados 
 *  
 * @example 
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2] 
 */ 
const removeDuplicates = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr.indexOf(arr[i]) !== i){
        arr.splice(i, 1);
      }
    }
    return arr;
}

/** 
 * @name countLetter 
 * @description Devuelve la cantidad de veces que una letra aparece en un str
ing  
 * 
 * @param {string} letter - Letra a contar 
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter} 
 * @returns {Number} - Número de veces que aparece {letter} en {text} 
 *  
 * @example 
 *  countLetter("a", "javascript") // returns 2 
 */ 
const countLetter = (letter, text) => {
  let contador = 0;
  let visor = "";
  for (let i = 0; i <= text.length - letter.length; i++) {
    for (let j = i; j < i + letter.length; j++) {
      visor += text.charAt(j);
    }
    if (letter == visor) {
      contador++;
    }
    visor = "";
  }
  return contador;
}

/** 
 * @name removeWords 
 * @description Dado un string y un array de palabras a remover, devuelve el 
string sin las palabras removidas 
 * 
 * @param {string} str - Texto a recortar  
 * @param {string[]} words - Palabras a remover 
 * @returns {string} - Texto resultante con las palabras removidas 
 *  
 * @example 
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns 
"This is a test" 
 */
let removeWords = (str, words) => {
    let str_separado = str.split(" ");
    let result = "";
    for(let i = 0; i < str_separado.length; i++){
        let bandera = false;
        for(let j = 0; j < words.length; j++){
            if(str_separado[i] == words[j]){
                bandera = true;
                break;
            }
        }
        if(!bandera) {
            result += str_separado[i] + " ";
        }
    }
    return result;

}