/* Se solicita una aplicación que ayude al usuario a la toma de decisiones al momento de salir de su casa.
Los días domingo el usuario no trabaja, el resto de los días sí.
Si la temperatura está por debajo de los 10 grados el usuario debe "abrigarse mucho", si la temperatura está por encima de los 20 grados el usuario deberá "ponerse ropa cómoda" y para casos intermedios usará "abrigo moderado". 
Se ingresa la temperatura y el día de la semana y la aplicación deberá mostrar la salida. A la salida se le incorporará para todos los casos la instrucción de levantarse:

Ejemplos de salida:
Ej. 1:
Levantarse
Ponerse ropa cómoda
Quedarse en casa, hoy no trabaja

Ej. 2:
Levantarse
Abrigarse Mucho
Ir al trabajo

Prestar atención a que las tres acciones no tienen vinculación entre sí. */

let temp;
let msj;
let day;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  temp = Number(document.querySelector("#nbr").value);
  console.log(temp)
  if (temp < 10) {
    msj = "abrigarse mucho";
  } else if (temp > 20) {
    msj = "ponerse ropa cómoda";
  } else {
    msj = "abrigo moderado";
  }
  day = document.querySelector("#selectDay").value;

  switch (day) {
    case "lu":
    case "ma":
    case "mi":
    case "ju":
    case "vi":
    case "sa":
        result = `Levantarse <br/> ${msj} <br /> Ir al trabajo`
      break;
    case "do":
        result = `Levantarse <br/> ${msj} <br /> quedarse en casa`
      break;
  }
  document.querySelector("#pResult").innerHTML = result;
}
