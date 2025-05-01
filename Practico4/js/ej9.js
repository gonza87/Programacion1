document
  .querySelector("#btnVerificar")
  .addEventListener("click", validarContrasenia);

function validarContrasenia() {
  let texto = document.querySelector("#texto1").value;

  let resultado = " ";
  let tieneMayus = false;
  let tieneMinus = false;
  let caracteresEspeciales = false;
  let sinEspacios = false;
  let tieneNumeros = false;

  if (texto.length >= 5 && isNaN(texto.charAt(0))) {
    for (let i = 0; i < texto.length; i++) {
      let letra = texto.charCodeAt(i);

      if (letra >= 65 && letra <= 90) {
        tieneMayus = true;
      } /*  else {
                resultado += "Faltan mayusculas";
            } */

      if (letra >= 97 && letra <= 122) {
        tieneMinus = true;
      } /* else {
                resultado += "Faltan minusculas";
            } */

      if (letra === 33 || letra === 46 || letra === 35 || letra === 64) {
        caracteresEspeciales = true;
      } /* else {
                resultado += "Faltan caracteres especiales";
            } */

      if (letra !== 32) {
        sinEspacios = true;
      } /* else {
                resultado += "No puede tener espacios";
            } */

      if (letra >= 48 && letra <= 57) {
        tieneNumeros = true;
      } /* else {
                resultado += "Faltan numeros";
            } */
    }

    if (
      tieneMayus &&
      tieneMinus &&
      tieneNumeros &&
      sinEspacios &&
      caracteresEspeciales
    ) {
      resultado = "cumple";
    } else {
      resultado = "nada";
    }
  } else {
    resultado = "nada";
  }

  document.querySelector("#pMensaje").innerHTML = resultado;
}
