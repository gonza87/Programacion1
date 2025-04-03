/* Crear un campo de texto y un botón para que cada vez que se ingrese un número en el campo de texto se acumule el total en una variable.
Al presionar otro botón mostrar el resultado final acumulado. */


let acumulador = 0;


document.querySelector("#btnCount").addEventListener("click", Counter);
document.querySelector("#btnShow").addEventListener("click", showCounter);

function Counter(){
    acumulador += Number(document.querySelector("#nbr").value);
    
    
};

function showCounter(){

     document.querySelector("#pCount").innerHTML = `Total acumulado: ${acumulador}`;
}