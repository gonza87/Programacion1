/* ⭐⭐⭐Un cine nos pide crear una aplicación para almacenar películas. De cada película se quiere guardar el nombre (texto), el año (número), el género (comedia, drama o ciencia ficción), la cantidad de votantes (número) y el total de puntos totales recibidos (número). Los generos estarán precargados en un array de generos y tendrán un id, un nombre y la edad a partir de la cual las películas de ese género son aptas.

a) Crear la interfaz HTML que permita el ingreso de los datos solicitados. El dato correspondiente al género se debe capturar a través de un combo desplegable.

b) Crear la funcionalidad javascript que permita almacenar películas, teniendo en cuenta que se debe validar que el año sea numérico y que el nombre sea único (que no exista otra película con ese nombre).

c) Agregar a la interfaz HTML un botón y una tabla de datos y listar en ella todas las películas que tengan un promedio mayor o igual a 4. El promedio se obtendrá de la división del total de puntos recibidos entre la cantidad de votantes. Al hacer click en el botón se cargará la tabla.

d) Crear un nuevo campo de texto en el que se pueda ingresar el nombre de una película y un botón que al ser presionado busque en el array de las películas esa película ingresada en el campo de texto y muestre en un párrafo en el HTML la información disponible de la película y la edad a partir de la cual es apta esa película. En caso que la película no esté en el array informar al usuario que esa película no se encuentra en el listado.

e) Crear una tabla que muestre todos los géneros y cuantas peliculas hay de cada género. */

class Genero {
  constructor(id, nombre, edad) {
    (this.id = id), (this.nombre = nombre), (this.edad = edad);
  }
}

class Pelicula {
  constructor(nombre, anio, objGenero, votantes, puntos) {
    (this.nombre = nombre),
      (this.anio = anio),
      (this.objGenero = objGenero),
      (this.votantes = votantes),
      (this.puntos = puntos);
  }
}

class Sistema {
  constructor() {
    this.acumuPeliComedia = 0;
    this.acumuPelidrama = 0;
    this.acumuPeliFiccion = 0;
    this.peliculas = [];
    this.generos = [
      new Genero(1, "comedia", 20),
      new Genero(3, "drama", 15),
      new Genero(5, "ficcion", 19),
    ];
  }

  existePelicula(nombrePelicula) {
    let existe = false;
    for (let i = 0; i < this.peliculas.length; i++) {
      let objPelicula = this.peliculas[i];
      if (objPelicula.nombre === nombrePelicula) {
        existe = true;
        break;
      }
    }
    return existe;
  }

  crearPelicula(objPelicula) {
    
    this.peliculas.push(objPelicula);
    
    if(objPelicula.objGenero.nombre ==="comedia"){
      this.acumuPeliComedia++
    }
    if(objPelicula.objGenero.nombre ==="drama"){
      this.acumuPelidrama++
    }
    else{
      this.acumuPeliFiccion++
    }
    
  }

  devolverObjGenero(id) {
    let objGenero;
    for (let i = 0; i < this.generos.length; i++) {
      if (this.generos[i].id === id) {
        objGenero = this.generos[i];
        break;
      }
    }
    return objGenero;
  }

  buscarPelicula(textoPelicula) {
    let pelicula = -1;
    for (let i = 0; i < this.peliculas.length; i++) {
      let objPelicula = this.peliculas[i];
      if (objPelicula.nombre.toLowerCase() === textoPelicula.toLowerCase()) {
        pelicula = objPelicula;
        break;
      }
    }
    return pelicula;
  }

 
}

let miSistema = new Sistema();

function armarComboGeneros() {
  document.querySelector(
    "#slcGenero"
  ).innerHTML = `<option value="x">Seleccione</option>`;
  for (let i = 0; i < miSistema.generos.length; i++) {
    let objGenero = miSistema.generos[i];
    document.querySelector(
      "#slcGenero"
    ).innerHTML += `<option value="${objGenero.id}">${objGenero.nombre}</option>`;
  }
}
armarComboGeneros();
document
  .querySelector("#btnIngresar")
  .addEventListener("click", ingresarPelicula);

function ingresarPelicula() {
  let nombreCampo = document.querySelector("#txtNombre").value.trim();
  let anioCampo = Number(document.querySelector("#nbrAnio").value);
  let generoCampo = Number(document.querySelector("#slcGenero").value);
  let votantesCampo = Number(document.querySelector("#nbrVotantes").value);
  let puntosCampo = Number(document.querySelector("#nbrPuntos").value);
  if (
    nombreCampo !== "" &&
    !miSistema.existePelicula(nombreCampo) &&
    generoCampo !== "x"
  ) {
    let objGenero = miSistema.devolverObjGenero(generoCampo);
    let objNewPelicula = new Pelicula(
      nombreCampo,
      anioCampo,
      objGenero,
      votantesCampo,
      puntosCampo
    );
    miSistema.crearPelicula(objNewPelicula);
    console.log(miSistema.peliculas);
  }
}

document.querySelector("#btnListar").addEventListener("click", listarPeliculas);

function listarPeliculas() {
  document.querySelector("#tabla").innerHTML = "";
  for (let i = 0; i < miSistema.peliculas.length; i++) {
    let objPelicula = miSistema.peliculas[i];
    if (objPelicula.puntos / objPelicula.votantes >= 4) {
      document.querySelector("#tabla").innerHTML += `<tr>
            <td>${objPelicula.nombre}</td>
            <td>${objPelicula.anio}</td>
            <td>${objPelicula.objGenero.nombre}</td>
            <td>${objPelicula.votantes}</td>
            <td>${objPelicula.puntos}</td>
            </tr>`;
    }
  }
}

document.querySelector("#btnBuscar").addEventListener("click", buscarPelicula);
function buscarPelicula() {
  let texto = document.querySelector("#txtBuscar").value;
  let buscarPelicula = miSistema.buscarPelicula(texto);
  if (buscarPelicula === -1) {
    document.querySelector("#pResultado").innerHTML = "La pelicula no existe";
  } else {
    document.querySelector(
      "#pResultado"
    ).innerHTML = `Nombre: ${buscarPelicula.nombre} Apta para Edad: ${buscarPelicula.objGenero.edad}`;
  }
}
