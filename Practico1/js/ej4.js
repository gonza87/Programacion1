/* Ingresar dos valores y mostrar la suma de esos valores en un párrafo y en otro párrafo el resultado de la multiplicación de esos dos valores. 
Se recomienda capturar los dos valores una única vez y luego operar con ellos en una única función. */

let number1;
let number2;
let result1;
let result2;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    number1 = Number(document.querySelector("#nbr1").value);
    number2 = Number(document.querySelector("#nbr2").value);
    result1 = number1 + number2;
    result2 = number1 * number2;
    
    document.querySelector("#pResult1").innerHTML = `Suma: ${result1}`;
    document.querySelector("#pResult2").innerHTML = `Multiplicacion: ${result2}`;

};