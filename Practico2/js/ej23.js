/* Se ingresan las notas de examen de un grupo de estudiantes. 
Luego de cada ingreso actualizar la información mostrando cuántos perdieron (<70), cuántos salvaron, y cuántos sacaron una muy buena nota (>90).
 A su vez indicar cuál fue el promedio de notas, cuál fue la nota máxima y cuál fue la nota mínima. */

 let notaIngresada;
 let contAlumnosCargados = 0;
 let perdieron =0;
 let salvaron =0;
 let muyBuenaNota =0;
 let acumulaNotas = 0;
 let minNota =100;
 let maxNota =0;

 document.querySelector("#btnShow").addEventListener("click", showResult);

 function showResult(){
    notaIngresada = Number(document.querySelector("#nbr").value)
    
    if(notaIngresada >0 && notaIngresada <=100){
        contAlumnosCargados ++
        if(notaIngresada < minNota){
            minNota = notaIngresada;
        }
        if (notaIngresada > maxNota){
            maxNota = notaIngresada;
        }

        if (notaIngresada < 70){
            perdieron ++;
            
        }
        else if(notaIngresada >=70 && notaIngresada <=90){
           
            salvaron ++;
        }
        else{
            muyBuenaNota ++;
            salvaron ++;
        }
        acumulaNotas += notaIngresada;

        document.querySelector("#pResult").innerHTML = `Alumnos que perdieron:${perdieron}<br> Alumnos que salvaron: ${salvaron}<br> Muy buena nota: ${muyBuenaNota}<br> Promedio de notas: ${acumulaNotas/contAlumnosCargados}<br> Nota maxima: ${maxNota}<br> Nota minima: ${minNota}`
    }else{
        document.querySelector("#pResult").innerHTML ="Nota invalida, debe ser entre 1 a 100";
    }

    

 }