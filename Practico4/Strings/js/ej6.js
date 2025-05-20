/*
⭐⭐Solicitar un texto y si el texto tiene más de diez caracteres contar la cantidad de vocales, sino contar la cantidad de consonantes. En todos los casos se pueden contar las vocales y hacer las restas correspondientes contando a cualquier otro caracter como una consonante.
*/

document.querySelector("#btnContar").addEventListener("click", contarLetras);

function contarLetras() {
  let texto = document.querySelector("#txtTexto").value;
  let cantidadVocales = 0;
  let textoMin = texto.toLowerCase();

  let vocales = "aeiou";

  for (let i = 0; i < textoMin.length; i++) {
    letra = textoMin.charAt(i);

    for (j = 0; j < vocales.length; j++) {
      let vocal = vocales.charAt(j);
      if (letra === vocal) {
        cantidadVocales++;
        break;
      }
    }
  }

  if (texto.length > 10) {
    document.querySelector(
      "#pMensaje"
    ).innerHTML = `Vocales: ${cantidadVocales}`;
  } else {
    document.querySelector("#pMensaje").innerHTML = `Consonantes y demás: ${
      texto.length - cantidadVocales
    }`;
  }
}
