/* Para un equipo de fútbol el cálculo de los puntos obtenidos en el campeonato se asigna de la siguiente manera:
Tres puntos por cada partido ganado.
Un punto por cada partido empatado.
Ningún punto por partido perdido.

Solicitar el ingreso de partidos ganados, empatados y perdidos y calcular el total de puntos obtenidos por ese equipo. Tener en cuenta que si bien un dato se va a solicitar, no es relevante para los cálculos. */

let won;
let tied;
let lost;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    won = Number(document.querySelector("#nbr1").value);
    tied = Number(document.querySelector("#nbr2").value);
    lost = Number(document.querySelector("#nbr3").value);
    result = (won * 3) + tied + (lost*0);
    
    document.querySelector("#pResult").innerHTML = `Total de puntos: ${result}`


};
