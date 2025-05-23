/* ⭐⭐Partiendo de un array que contenga los valores 1 y 1 en las primeras dos posiciones, completar el array hasta la posición 20 con los números de la sucesión de Fibonacci.
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377.
Recorrer y mostrar el array resultante.
La sucesión comienza con los números 1 y 1 y a partir de estos. “cada término es la suma de los dos anteriores".
Recorrer y mostrar el array resultante. */

document.querySelector("#btnMostrar").addEventListener("click", recorrerArray);
let listFibonacci = [1, 1];

function recorrerArray() {
  document.querySelector("#pResult").innerHTML = "";

  for (let i = 2; i < 20; i++) {
    if (listFibonacci.length < 20) {
      let valorNuevo = listFibonacci[i - 1] + listFibonacci[i - 2];
      listFibonacci.push(valorNuevo);
    }
  }

  console.log(listFibonacci);
  document.querySelector("#pResult").innerHTML = listFibonacci;
}
