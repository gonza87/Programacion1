/* Ingresar dos valores y una operación ("S"-suma, "R"-resta, "M"-multiplicación, "D"-división) y presionar un botón, al presionar el botón, dependiendo de la operación ingresada hacer el cálculo correspondiente entre el primer valor y el segundo, mostrar el resultado. */

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){

    let nbr1, nbr2,operador, result;
    nbr1 = Number(document.querySelector("#nbr1").value);
    nbr2 = Number(document.querySelector("#nbr2").value);
    operador = document.querySelector("#selOption").value;

    if(operador === "s"){
        result = nbr1 + nbr2;
    }else if(operador === "r"){
        result = nbr1 - nbr2;
    }else if(operador === "m"){
        result = nbr1 * nbr2
    }else{
        result = nbr1 / nbr2;
    }

    document.querySelector("#pResult").innerHTML = `Resultado: ${result}`;

}