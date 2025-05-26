/* ⭐⭐Una empresa necesita almacenar los alias (nombres de usuario) de red de sus empleados.
a) Luego de cada ingreso mostrar todos los usuarios ingresados hasta el momento.
b) Modificar lo anterior para que los alias no se repitan. */

document.querySelector("#btnIngresar").addEventListener("click", tomarTexto);
document.querySelector("#btnMostrar").addEventListener("click", mostrar);

let listUsers = [];
function tomarTexto(){
    let user= document.querySelector("#txtTexto").value.trim();
    if(user.length >3 && user !== ""){
        if(almacenarUser(user) === -1 ){
            document.querySelector("#pResult").innerHTML ="Usuario existente"
        }
       
    }
    else{
        document.querySelector("#pResult").innerHTML ="Usuario invalido"
    }
   
}

function almacenarUser(user){
    if(listUsers.indexOf(user) === -1){
        listUsers.push(user);
         mostrarListUsers();
         return 1
    }
    else{
        return -1
    }
}

function mostrarListUsers(){
    document.querySelector("#pResult").innerHTML ="";
    for(let i=0; i<listUsers.length; i++){
        document.querySelector("#pResult").innerHTML += `Usuario ${i+1}: ${listUsers[i]} <br>`
    }
}

function mostrar(){
    mostrarListUsers();
}