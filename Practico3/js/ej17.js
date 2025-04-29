document.querySelector("#btnDividir").addEventListener("click", dividir);

function dividir() {
    let dividendo = Number(document.querySelector("#txtDividendo").value);
    let divisor = Number(document.querySelector("#txtDivisor").value);
    let cociente = 0;
    let resto = dividendo;
    while(resto >= divisor){
        resto -= divisor;
        cociente++;
    }
    document.querySelector("#pMensajes").innerHTML = `
    Dividendo: ${dividendo}<br>
    divisor: ${divisor}<br>
    cociente: ${cociente}<br>
    resto: ${resto}<br>
    `
}