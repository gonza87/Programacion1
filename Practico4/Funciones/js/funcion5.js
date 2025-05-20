/* Crear una función que reciba como parámetro un valor de temperatura (en Fahrenheit) y una unidad de medida y convierta esa temperatura a la unidad correspondiente. */

document.querySelector("#btnShow").addEventListener("click", tomarDatos);
function tomarDatos() {
  let fahrenheit = Number(document.querySelector("#nbr1").value);
  let medida = document.querySelector("#slcMedida").value;
  let conversion = convertirFaAMedida(fahrenheit, medida);
  if (conversion !== -1) {
    document.querySelector(
      "#pResult"
    ).innerHTML = `Conversion de fahrenheit a ${medida} es: ${conversion}`;
  } else {
    document.querySelector("#pResult").innerHTML = "Error";
  }
}

function convertirFaAMedida(fahrenheit, medida) {
  if (!isNaN(fahrenheit) && medida !== "x") {
    switch (medida) {
      case "Celsius":
        return (fahrenheit - 32) / 1.8;

      case "Kelvin":
        return (fahrenheit + 459.67) / 1.8;

      case "Rankine":
        return fahrenheit + 459.67;

      case "Réaumur":
        return (fahrenheit - 32) / 2.25;
    }
  } else {
    return -1;
  }
}
