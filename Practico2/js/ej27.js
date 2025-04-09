/* Implementar un programa que permita jugar al siguiente juego: Se trata de un juego entre dos jugadores. Consiste en adivinar el número que el otro jugador ingresa.
El jugador 1 ingresa un número, luego el sistema le pide al jugador 2 que ingrese números hasta que adivine el número que el jugador 1 ingresó.

Se va contando la cantidad de intentos que realiza el jugador hasta adivinar el número. Los números a adivinar siempre están entre 1 y 100.

A modo de ayuda el sistema da pistas en función a la cercanía entre el número ingresado y el número a adivinar.

Si el número ingresado está a una distancia > 15 el sistema despliega el texto "estas lejos".
Si el número ingresado está a una distancia entre 10 y 15 el sistema despliega el texto "te estás acercando".
Si la distancia es entre 5 y 9 el sistema despliega el texto "cada vez más cerca".
Si la distancia es entre 1 y 4 se despliega el texto "muy pero muy cerca".

Ej.: Si el número a adivinar es el y el jugador ingresa el 91 el texto que se despliega es "cada vez más cerca" Al finalizar mostrar la cantidad de intentos que llevó adivinar el número.
Utilizando el método random de la clase Math se puede resolver el mismo problema pero con un número aleatorio generado por la aplicación, de esta forma se podría jugar "contra la computadora" */

let numJuga1;
let contIntentos = 0;
let numJuga2;


document.querySelector("#btnShow1").addEventListener("click", jugadorOne);
document.querySelector("#btnShow2").addEventListener("click", jugadorTwo);

function jugadorOne() {
  numJuga1 = Number(document.querySelector("#nbr1").value);
  document.querySelector("#pResult").innerHTML =""
  if (numJuga1 !== undefined && numJuga1 > 0 && numJuga1 <= 100) {
    document.querySelector("#nbr1").setAttribute("disabled", "disabled");
    document.querySelector("#nbr1").value = "";
    document.querySelector("#btnShow1").setAttribute("disabled", "disabled");
    document.querySelector("#nbr2").removeAttribute("disabled", "disabled");
    document.querySelector("#btnShow2").removeAttribute("disabled", "disabled");
    
  } else {
    document.querySelector("#pResult").innerHTML = "ingrese numero valido";
    
  }
}

function jugadorTwo() {
  
  numJuga2 = Number(document.querySelector("#nbr2").value);
  let difNumeros;

  if (numJuga2 !== undefined && numJuga2 > 0 && numJuga2 <= 100) {
    contIntentos++;

    if (numJuga1 > numJuga2) {
      difNumeros = numJuga1 - numJuga2;
    }
    else if (numJuga2 > numJuga1) {
      difNumeros = numJuga2 - numJuga1;
    }
  }

    if (difNumeros > 15) {
   
    document.querySelector("#pResult").innerHTML = "estas lejos"
  }
  if (difNumeros >= 10 && difNumeros <= 15) {
    
    document.querySelector("#pResult").innerHTML = "te estas acercando"
    
  }
  if (difNumeros >= 5 && difNumeros <= 9) {
    
    document.querySelector("#pResult").innerHTML = "cada vez más cerca";
  } 
  if(difNumeros <=1 && difNumeros <=4){
    
    document.querySelector("#pResult").innerHTML = "muy pero muy cerca";
  }
  if(numJuga1 === numJuga2){
    console.log("ganaste")
    document.querySelector("#pResult").innerHTML = `Ganaste!!! Intentos realizado ${contIntentos}`;
  } 
   
}
