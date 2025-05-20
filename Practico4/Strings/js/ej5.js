/* ⭐Sabiendo que la primera letra de una matrícula indica el departamento al que pertenece el vehículo. Ingresar una matrícula con el formato (AAA-1234) e informar a que departamento corresponde.
A - Canelones
B - Maldonado
C - Rocha
D - Treinta y Tres
E - Cerro Largo
F - Rivera
G - Artigas
H - Salto
I - Paysandú
J - Río Negro
K - Soriano
L- Colonia
M - San José
N - Flores
O- Florida
P - Lavalleja
Q - Durazno
R - Tacuarembó
S - Montevideo */

document
  .querySelector("#btnShow")
  .addEventListener("click", mostrarDepartamento);
function mostrarDepartamento() {
  let matricula = document.querySelector("#txt").value;
  let matriculaMayus = matricula.toUpperCase();
  let primerLetra = matriculaMayus.charAt(0);
  let msj = "";

  switch (primerLetra) {
    case "A":
      msj = `La matricula ${matriculaMayus} perteneces a Canelones`;
      break;
    case "B":
      msj = `La matricula ${matriculaMayus} perteneces a Maldonado`;
      break;
    case "C":
      msj = `La matricula ${matriculaMayus} perteneces a Rocha`;
      break;
    case "D":
      msj = `La matricula ${matriculaMayus} perteneces a Treinta y Tres`;
      break;
    case "E":
      msj = `La matricula ${matriculaMayus} perteneces a Cerro Largo`;
      break;
    case "F":
      msj = `La matricula ${matriculaMayus} perteneces a Rivera`;
      break;
    case "G":
      msj = `La matricula ${matriculaMayus} perteneces a Artigas`;
      break;
    case "H":
      msj = `La matricula ${matriculaMayus} perteneces a Salto`;
      break;
    case "I":
      msj = `La matricula ${matriculaMayus} perteneces a Paysandu`;
      break;
    case "J":
      msj = `La matricula ${matriculaMayus} perteneces a Río Negro`;
      break;
    case "K":
      msj = `La matricula ${matriculaMayus} perteneces a Soriano`;
      break;
    case "L":
      msj = `La matricula ${matriculaMayus} perteneces a Colonia`;
      break;
    case "M":
      msj = `La matricula ${matriculaMayus} perteneces a San Jose`;
      break;
    case "N":
      msj = `La matricula ${matriculaMayus} perteneces a Flores`;
      break;
    case "O":
      msj = `La matricula ${matriculaMayus} perteneces a Florida`;
      break;
    case "P":
      msj = `La matricula ${matriculaMayus} perteneces a Lavalleja`;
      break;
    case "Q":
      msj = `La matricula ${matriculaMayus} perteneces a Durazno`;
      break;
    case "R":
      msj = `La matricula ${matriculaMayus} perteneces a Tacuarembó`;
      break;
    case "S":
      msj = `La matricula ${matriculaMayus} perteneces a Montevideo`;
      break;
    default:
      msj = "Matricula invalida";
      break;
  }
  document.querySelector("#pResult").innerHTML = msj;
}
