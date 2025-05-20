/* ⭐⭐ Desarrollar una aplicación que permita calcular el sueldo líquido de una persona sin contemplar el irpf.
Del sueldo nominal se descontará:
- BPS un 15%
- FRL 0,1 %
También se descontará Fonasa que dependerá si tiene hijos o no. Fonasa con hijos 6%  sin hijos 4,5%.

La persona deberá ingresar su sueldo nominal, seleccionar de un combo si tiene o no hijos y al presionar un botón se le mostrará el sueldo líquido a cobrar.

Para un sueldo de 10.000 pesos el sueldo líquido sin hijos es de 8040 y con hijos de 7890. */


document.querySelector("#btnShow").addEventListener("click", tomarDatos);
function tomarDatos(){
    let sueldoNominal = Number(document.querySelector("#nbr1").value);
    let tieneHijos = document.querySelector("#slcHijos").value;
    if(!isNaN(sueldoNominal) &&sueldoNominal >0 && tieneHijos !=="x"){
        let sueldoLiquido = calcularSueldoLiquido(sueldoNominal, tieneHijos);
        document.querySelector("#pResult").innerHTML = `Sueldo liquido ${sueldoLiquido}`;
    }
    else{
        document.querySelector("#pResult").innerHTML = "Datos incorrectos";
    }
}

function calcularSueldoLiquido(sueldoNominal, tieneHijos){
    let bps=15;
    let frl=0.1;
    let fonasa=0;
    let acumuPorcentajeDescuento=0;

    if(tieneHijos === "si"){
        fonasa = 6;
    }
    else{
        fonasa = 4.5;
    }
    acumuPorcentajeDescuento = bps + frl + fonasa;

    return sueldoNominal - ((sueldoNominal* acumuPorcentajeDescuento) /100);


    

}