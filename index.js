let palabraSnake = "hola-como-estas";
let palabraCamel = "holaComoAndamios";

snakeToCamel(palabraSnake);
camelToSnake(palabraCamel);

function camelToSnake(palabra) {
  let resultadoFormateado;

  resultadoFormateado = camelFormatToSnake(palabra);
  console.log(resultadoFormateado);
}

function addStr(str, index, stringToAdd) {
  return (
    str.substring(0, index) + stringToAdd + str.substring(index, str.length)
  );
}

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

function snakeToCamel(palabra) {
  let resultadoArray;
  let resultadoFormateado;

  resultadoArray = snakeFormatToArray(palabra);
  resultadoFormateado = arrayPalabrasSnakesToCamel(resultadoArray);
  console.log(resultadoFormateado);
}

function snakeFormatToArray(palabra) {
  return (palabra = palabra.split("-"));
}

function arrayPalabrasSnakesToCamel(arrayPalabras) {
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
