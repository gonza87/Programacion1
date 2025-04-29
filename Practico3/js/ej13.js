/* ⭐⭐Un colegio nos solicitó una aplicación para apoyo de un curso de geometría. Nuestro objetivo será dibujar rectángulos. Para eso pediremos el alto y ancho y dibujaremos el rectángulo de esas dimensiones. utilizando un carácter apropiado (por ejemplo círculos, asteriscos, numerales, la letra x)

Un escenario posible sería el siguiente: nos ingresan los valores ancho = 5, alto = 4.
El rectángulo resultante será:
00000
00000
00000
00000 */

document.querySelector('#btnMostrar').addEventListener('click', mostrarResultado);
function mostrarResultado(){
    let alto = Number(document.querySelector('#nbrAlto').value);
    let ancho = Number(document.querySelector('#nbrAncho').value);
    let mensaje = "";
    let columnaAncho = '';

    for (let i = 1; i <= ancho; i++) {
        columnaAncho += 'O'
    }

    for (let i = 1; i <= alto; i++) {
        mensaje += columnaAncho + '<br>'
    }

    document.querySelector('#pResultado').innerHTML = mensaje

}