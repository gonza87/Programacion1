/* let texto = "Hola a todos"; */

//let cant = texto.length;
//texto = "Hola";

/* if(texto.length >= 8){
    console.log("El texto tiene más de ocho caracteres");
} */

//console.log(cant);

//let numero = String(123456);
//let x = Number("44") //-> 44
//console.log(numero.length);
/* 
let letra = texto.charAt(3);//"a"
console.log(letra);

let letra2 = texto.charAt(0);//"H"
console.log(letra2);

let letra3 = texto.charAt(4);//" "
console.log(letra3);

let letra4 = texto.charAt(11);//"s"
console.log(letra4);

let letra5 = texto.charAt(texto.length - 1);//"s"
console.log(letra5);
 */
/*
H
o
l
a

a

t
o
d
o
s
*/

/* document.querySelector("#pMensaje").innerHTML += `${texto.charAt(0)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(1)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(2)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(3)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(4)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(5)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(6)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(7)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(8)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(9)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(10)}<br>`;
document.querySelector("#pMensaje").innerHTML += `${texto.charAt(11)}<br>`; */

/* for (let i = 0; i < texto.length; i++) {
    document.querySelector("#pMensaje").innerHTML += `${texto.charAt(i)}<br>`;
} */

/* let texto = "Hola a todos";

let pos = texto.indexOf("t");//7
console.log(pos);

let pos2 = texto.indexOf("a");//3
console.log(pos2);

let pos3 = texto.indexOf(" ");//4
console.log(pos3);

let pos4 = texto.indexOf("z");//-1
console.log(pos4);

let pos5 = texto.indexOf("h");//-1
console.log(pos5);

let pos6 = texto.indexOf("H");//0
console.log(pos6);

let pos7 = texto.indexOf("odo");//8
console.log(pos7);

let correo = "pepe@gmail.com";

if(correo.indexOf("@") === correo.lastIndexOf("@") && correo.indexOf("@") > 0){
    console.log("Correo válido");
}

let pos8 = texto.lastIndexOf("o");//10
console.log(pos8);
 */

/* let texto = "Hola a todos";

let textoMin = texto.toLowerCase();

let textoMay = texto.toUpperCase();

console.log(texto);
console.log(textoMin);
console.log(textoMay);

texto = texto.toLowerCase();

console.clear();

let libro = "Estaba Caperucita Roja en el bosque con el lobo";
let libroMin = libro.toLowerCase();

let busqueda = "ROJA";
let busquedaMin = busqueda.toLowerCase();

if(libroMin.indexOf(busquedaMin) !== -1){
    console.log("Aparece el texto en el libro");
}else{
    console.log("NO aparece el texto en el libro");
} */

/* let texto = "Hola a todos";//"la a tod"

let subcadena = texto.substring(2, 10);
console.log(subcadena);

let subcadena2 = texto.substring(2);
console.log(subcadena2); */


/* let correo = "lucia@gmail.com";

let usuario = correo.substring(0, correo.indexOf("@"));//"ana"
console.log(usuario);

let dominio = correo.substring(correo.indexOf("@") + 1);//"gmail.com"
console.log(dominio); */

/*
⭐⭐Solicitar un texto y si el texto tiene más de diez caracteres contar la cantidad de vocales, sino contar la cantidad de consonantes. En todos los casos se pueden contar las vocales y hacer las restas correspondientes contando a cualquier otro caracter como una consonante.
*/

document.querySelector("#btnContar").addEventListener("click", contarLetras);

function contarLetras() {
    let texto = document.querySelector("#txtTexto").value;
    let cantidadVocales = 0;
    let textoMin = texto.toLowerCase();

    let vocales = "aeiou";

    for (let i = 0; i < textoMin.length; i++) {

        letra = textoMin.charAt(i);

        for (j = 0; j < vocales.length; j++) {
            let vocal = vocales.charAt(j);
            if (letra === vocal) {
                cantidadVocales++;
                break;
            }
        }

        /* let letra = textoMin.charAt(i);
        if(vocales.indexOf(letra) !== -1){
            cantidadVocales++;
        } */

        /* let letra = textoMin.charAt(i);
        if (letra === "a" || letra === "e") {
            cantidadVocales++;
        } */

        /* let letra = textoMin.charAt(i);
        if (letra.indexOf("a") !== -1 || letra.indexOf("e") !== -1) {
            cantidadVocales++;
        } */


        //let letra = textoMin.charAt(i);
        /* switch (textoMin.charAt(i)) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                cantidadVocales++;
                break;
        } */

    }

    if (texto.length > 10) {
        document.querySelector("#pMensaje").innerHTML = `Vocales: ${cantidadVocales}`;
    } else {
        document.querySelector("#pMensaje").innerHTML = `Consonantes y demás: ${texto.length - cantidadVocales}`;
    }
}