/* ⭐⭐Ingresar un texto y al presionar un botón armar un nuevo string con todo el texto en minúsculas y solo la primera letra de la primera palabra en mayúsculas. */

document.querySelector("#btnShow").addEventListener("click", newString);

function newString(){
    let texto = document.querySelector("#txt").value;
    let textoMinus = texto.toLowerCase();
    let newString = "";
    for (let i=0; i<textoMinus.length; i++){
        if(i === 0){
             newString += textoMinus.charAt(i).toUpperCase(); 
            

        }
        else{
            newString += textoMinus.charAt(i);
        }
    }
    document.querySelector("#pResult").innerHTML = newString;
}