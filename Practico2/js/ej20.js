document.querySelector("#btnVerificar").addEventListener("click", recetaDeCocina);

function recetaDeCocina() {
    let tAzucar = Number(document.querySelector("#tAzucar").value);
    let gHarina = Number(document.querySelector("#gHarina").value);
    let CucharadaAceite = Number(document.querySelector("#CucharadaAceite").value);
    let tAgua = Number(document.querySelector("#tAgua").value);
    let resultado = document.querySelector("#pResultado");

    let unidadHarina;

    if (gHarina >= 100 && tAzucar >= 1 && CucharadaAceite >= 1 && tAgua >= 1) {
        unidadHarina = gHarina / 100

        if (unidadHarina < tAzucar && unidadHarina < CucharadaAceite && unidadHarina < tAgua) {
            resultado.innerHTML = unidadHarina;
        } else if (tAzucar < CucharadaAceite && tAzucar < tAgua) {
            resultado.innerHTML = tAzucar;
        } else if (CucharadaAceite < tAgua) {
            resultado.innerHTML = CucharadaAceite;
        } else {
            resultado.innerHTML = tAgua;
        }
    } else {
        resultado.innerHTML = "No hay ingredientes suficientes"
    }
}
