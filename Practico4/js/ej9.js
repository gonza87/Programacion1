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
      }

      if (letra >= 97 && letra <= 122) {
        tieneMinus = true;
      }

      if (letra === 33 || letra === 46 || letra === 35 || letra === 64) {
        caracteresEspeciales = true;
      }

      if (letra !== 32) {
        sinEspacios = true;
      }

      if (letra >= 48 && letra <= 57) {
        tieneNumeros = true;
      }
    }

    if (
      tieneMayus &&
      tieneMinus &&
      tieneNumeros &&
      sinEspacios &&
      caracteresEspeciales
    ) {
      resultado = `Cumple contraseña: ${texto}`;
    } else {
      resultado = "No cumple condiciones";
    }
  } else {
    resultado = "No cumple condiciones";
  }

  document.querySelector("#pMensaje").innerHTML = resultado;
}
