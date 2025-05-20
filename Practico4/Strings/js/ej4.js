/* ⭐Ingresar dos textos para verificar si el segundo es una subcadena del primero, es decir si está comprendido completamente dentro del primero.
Por ejemplo: “tom” es una subcadena de “automóvil descapotable”. */

document.querySelector("#btnShow").addEventListener("click", showSubcadena);

function showSubcadena(){
    let txt1 = document.querySelector("#txt1").value;
    let txt2 = document.querySelector("#txt2").value;
    let txt1Min = txt1.toLowerCase();
    let txt2Min = txt2.toLowerCase();
    let msj="";

    if(txt1Min.indexOf(txt2Min) !== -1){
        console.log("es cadena");
        msj = `"${txt2Min}" es una subcadena de "${txt1Min}"`;
    }
    else{
        msj = `"${txt2Min}" <strong>NO</strong> es una subcadena de "${txt1Min}"`;
    }
    document.querySelector("#pResult").innerHTML = msj;
}
