document.querySelector("#btnBuscar").addEventListener("click", buscarPrimerMultiplo);

function buscarPrimerMultiplo(){
    let inicio = Number(document.querySelector("#txtNumero1").value);
    let fin = Number(document.querySelector("#txtNumero2").value);
    
    for(let i = inicio; i <= fin; i++){
        if(i % 4 === 0 && i % 6 === 0){
            document.querySelector("#pMensajes").innerHTML += i + "-";
            break;
        }
    }

} 
