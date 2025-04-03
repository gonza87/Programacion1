/* ⭐Ingresar un código de departamento y mostrar en un párrafo el nombre del departamento que le corresponde.
A - Canelones
B - Maldonado
C - Rocha
D - Treinta y Tres
E - Cerro Largo
F - Rivera
G - Artigas
H - Salto
I - Paysandú
J - Rio Negro
K - Soriano
L - Colonia
M - San José
N - Flores
O - Florida
P - Lavalleja
Q - Durazno
R - Tacuarembó
S - Montevideo */

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  let letter, msj;

  letter = document.querySelector("#slct").value;

  switch (letter) {
    case "a":
      msj = "Canelones";
      break;
    case "b":
      msj = "Maldonado";
      break;
    case "c":
      msj = "Rocha";
      break;
    case "d":
      msj = "Treinta y Tres";
      break;
    case "e":
      msj = "Cerro Largo";
      break;
    case "f":
      msj = "Rivera";
      break;
    case "g":
      msj = "Artigas";
      break;
    case "h":
      msj = "Salto";
      break;
    case "i":
      msj = "Paysandú";
      break;
    case "j":
      msj = "Rio Negro";
      break;
    case "k":
      msj = "Soriano";
      break;
    case "l":
      msj = "Colonia";
      break;
    case "m":
      msj = "San José";
      break;
    case "n":
      msj = "Flores";
      break;
    case "o":
      msj = "Florida";
      break;
    case "p":
      msj = "Lavalleja";
      break;
    case "q":
      msj = "Durazno";
      break;
    case "r":
      msj = "Tacuarembó";
      break;
    case "s":
      msj = "Montevideo";
      break;
    default:
      msj = "Caracter invalido";
      break;
  }
  document.querySelector("#pResult").innerHTML = msj;
}
