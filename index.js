let palabraSnake = "hola-como-estas";
let palabraCamel = "holaComoEstas";

let palabraFinalSnake;

palabraSnake = palabraSnake.split("-");

arrayPalabrasToCamel(palabraSnake);

function arrayPalabrasToCamel(arrayPalabras) {
  let palabraFinalCamel;

  arrayPalabras.forEach((element) => {
    if (typeof palabraFinalCamel !== "undefined") {
      palabraFinalCamel += element[0].toUpperCase() + element.substring(1);
    } else {
      palabraFinalCamel = element[0].toUpperCase() + element.substring(1);
    }
  });

  console.log(palabraFinalCamel);
}
