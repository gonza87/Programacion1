/* ⭐Ingresar palabras e ir incorporándolas a un array indexado mediante un botón. 
Para finalizar presionar otro botón y mostrar un listado con todas las palabras almacenadas en ese array. */

let listaPalabras = [];

document.querySelector("#btnIngresar").addEventListener("click", tomarPalabras);
document.querySelector("#btnMostrar").addEventListener("click", mostrarArray);

function tomarPalabras() {
  console.log("test");
  let texto = document.querySelector("#txtPalabras").value;
  limpiar();
  if (texto !== "") {
    listaPalabras.push(texto);
    document.querySelector("#pResult").innerHTML = "Agregado exitosamente";
  } else {
    document.querySelector("#pResult").innerHTML = "Error";
  }
}

function limpiar() {
  document.querySelector("#pResult").innerHTML = "";
  document.querySelector("#txtPalabras").value = "";
}

function mostrarArray() {
  document.querySelector("#pResult").innerHTML =
    listarContenidoPosiciones(listaPalabras);
}

function listarContenidoPosiciones(list) {
  let resultado = "";
  for (let i = 0; i < list.length; i++) {
    resultado += `${list[i]} <br>`;
  }
  return resultado;
}
