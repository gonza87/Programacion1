/* Ingresar dos números y presionar un botón, al presionar el botón, si el primero es mayor que el segundo restar al primero el segundo, sino restar al segundo el primero y para cualquier caso mostrar el resultado. */

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    let nbr1;
    let nbr2;
    let result;

    nbr1 = Number(document.querySelector("#nbr1").value);
    nbr2 = Number(document.querySelector("#nbr2").value);
    if(nbr1 > nbr2){
        result = nbr1 - nbr2;
    }else{
        result = nbr2 - nbr1;
    }
    document.querySelector("#pResult").innerHTML = `Resultado: ${result}`;
}