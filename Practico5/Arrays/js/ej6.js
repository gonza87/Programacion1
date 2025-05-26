/* ⭐⭐Crear un campo de texto y dos botones. Al presionar el primer botón se agregará a un array el contenido del campo de texto. Al presionar el segundo botón se buscará lo escrito en el campo de texto en el array y si ese texto existe en el array se eliminará, sino se dará aviso de error. En todos los casos, mostrar el array resultante. */

document.querySelector("#btnAgregar").addEventListener("click", tomarTexto);
document.querySelector("#btnEliminar").addEventListener("click", eliminarTexto);

let listTextos=[];

function tomarTexto(){
    document.querySelector("#pResult2").innerHTML ="";
    let texto= document.querySelector("#txtTexto").value;
    agregarTexto(texto);
    mostrarArray();
}


function agregarTexto(texto){
    if(listTextos.indexOf(texto) === -1){
        listTextos.push(texto);
    } 
    
}

function eliminarTexto(){
    let texto= document.querySelector("#txtTexto").value;
    eliminarTextoList(texto);
    mostrarArray();
}

function eliminarTextoList(texto){
    let indice = listTextos.indexOf(texto); 
    document.querySelector("#pResult2").innerHTML ="";
    if(indice !== -1){
        listTextos.splice(indice,1)
    }
    else{
        document.querySelector("#pResult2").innerHTML ="No existe en la lista";
    }

}

function mostrarArray(){
    document.querySelector("#pResult").innerHTML ="";
    for(let i=0; i<listTextos.length; i++){
        document.querySelector("#pResult").innerHTML += `${listTextos[i]} <br>`
    }
}