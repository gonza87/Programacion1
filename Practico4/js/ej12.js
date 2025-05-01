document.querySelector("#btnVerificar").addEventListener("click", invertirTexto);

function invertirTexto() {
    let texto = document.querySelector("#texto1").value;
    let mensaje = document.querySelector("#pMensaje");
    let resultado = " ";


    for (let i = texto.length -1; i >= 0; i--) {
        resultado += texto.charAt(i);
    }

    mensaje.innerHTML = resultado;
}