/* ⭐Implementar una función que dados dos parámetros formales numéricos, n1 y n2, retorne cuántos números pares hay entre esos dos valores (inclusive).
Prestar atención al planteo que pide trabajar con parámetros y retorno. */

document.querySelector("#btnShow").addEventListener("click", examinarNumeros);

function examinarNumeros() {
  let num1 = Number(document.querySelector("#nbr1").value);
  let num2 = Number(document.querySelector("#nbr2").value);
  if (num1 !== " " && num2 !== " " && !isNaN(num1) && !isNaN(num2)) {
    let pares = buscarPares(num1, num2);
    document.querySelector("#pResult").innerHTML =
      "Numero pares encontrados: " + pares;
  } else {
    document.querySelector("#pResult").innerHTML = "ingrese numeros validos";
  }
}

function buscarPares(num1, num2) {
  let countPares = 0;
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
        countPares++;
      }
    }
  } else if (num2 < num1) {
    for (let i = num2; i <= num1; i++) {
      if (i % 2 === 0) {
        countPares++;
      }
    }
  } else {
    if (num1 % 2 === 0) {
      countPares++;
    }
  }
  return countPares;
}
