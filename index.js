let palabraSnake = "hola-como-estas";
let palabraCamel = "holaComoAndamios";

snakeToCamel(palabraSnake);
camelToSnake(palabraCamel);

/**
 * Recoge un string en formato Camel que queremos que se cambie al formato Snake
 * @param {string} palabra string a formatear
 */
function camelToSnake(palabra) {
  let resultadoFormateado;

  resultadoFormateado = camelFormatToSnake(palabra);
  console.log(resultadoFormateado);
}

/**
 *  Anyade una cadena de texto en el indice indicado sin eliminar caracteres
 *
 * @param {string} str string al que que le queremos anyadir una cadena
 * @param {int} index indice donde queremos anyadir el stringToAdd
 * @param {*} stringToAdd cadena de texto que usamos introducimos en el indice
 * @returns {string}
 */
function addStr(str, index, stringToAdd) {
  return (
    str.substring(0, index) + stringToAdd + str.substring(index, str.length)
  );
}

/**
 * Pasa un string de formato Camel a formato Snake
 * @param {string} palabra string a formatear
 * @returns {string}
 */
function camelFormatToSnake(palabra) {
  let letraToCheck;
  const separador = "_";

  for (let contador = 0; contador < palabra.length; contador++) {
    letraToCheck = palabra.charAt(contador);

    if (letraToCheck === letraToCheck.toUpperCase()) {
      palabra = addStr(palabra, contador, separador);
      contador++;
    }
  }

  return palabra.toLowerCase();
}

/**
 * Cambia un string en formato snake a formato Camel
 * @param {string} palabra string a formatear
 */
function snakeToCamel(palabra) {
  let resultadoArray;
  let resultadoFormateado;

  resultadoArray = snakeFormatToArray(palabra);
  resultadoFormateado = arrayPalabrasSnakeToCamel(resultadoArray);
  console.log(resultadoFormateado);
}

/**
 * Recoge un string en formato Snake y lo devuelve como un array con solamente las palabras dividiendo por "_"
 * @param {string} palabra string que divide
 * @returns {string[]}
 */
function snakeFormatToArray(palabra) {
  return (palabra = palabra.split("-"));
}

/**
 * Recoge una array de strings y devuelve el string en formato Camel
 * @param {string[]} arrayPalabras Array de strings
 * @returns {string}
 */
function arrayPalabrasSnakeToCamel(arrayPalabras) {
  let palabraFinalCamel;

  arrayPalabras.forEach((element) => {
    if (typeof palabraFinalCamel !== "undefined") {
      palabraFinalCamel += element[0].toUpperCase() + element.substring(1);
    } else {
      palabraFinalCamel = element[0].toUpperCase() + element.substring(1);
    }
  });

  return palabraFinalCamel;
}
