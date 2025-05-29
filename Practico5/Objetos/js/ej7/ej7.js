/* ⭐⭐a) Crear la interfaz y la funcionalidad para almacenar datos de personas (nombre, edad, nacionalidad).
b) Crear un botón que al ser presionado arme una tabla con todos los datos de personas disponibles.
c) Crear otro botón que arme una nueva tabla con todos los datos de las personas mayores de edad. */

let miSistema = new Sistema();

document.querySelector("#btnIngresar").addEventListener("click", tomarDatos);
function tomarDatos() {
  let nombre = document.querySelector("#txtNombre").value.trim();
  let edad = Number(document.querySelector("#nbrEdad").value);
  let nacionalidad = document.querySelector("#txtNacionalidad").value;
  let objPersona = new Persona(nombre, edad, nacionalidad);
  miSistema.crearPersona(objPersona);
}

document.querySelector("#btnListar").addEventListener("click", listarPersonas);

function listarPersonas() {
  let tabla = document.querySelector("#tablePersona");
  tabla.innerHTML = "";
  console.log(miSistema.personas);
  for (let i = 0; i < miSistema.personas.length; i++) {
    let persona = miSistema.personas[i];
    tabla.innerHTML += ` <tr>
                <td>${persona.nombre}</td>
                <td>${persona.edad}</td>
                <td>${persona.nacionalidad}</td>
            </tr>`;
  }
}

document
  .querySelector("#btnListarMayores")
  .addEventListener("click", mostrarMayores);
function mostrarMayores() {
  let tabla = document.querySelector("#tablePersonaMayor");
  tabla.innerHTML = "";
  for (let i = 0; i < miSistema.personas.length; i++) {
    let persona = miSistema.personas[i];
    if (persona.edad >= 18) {
      tabla.innerHTML += ` <tr>
                <td>${persona.nombre}</td>
                <td>${persona.edad}</td>
                <td>${persona.nacionalidad}</td>
            </tr>`;
    }
  }
}
