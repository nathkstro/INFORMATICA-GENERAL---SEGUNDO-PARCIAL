// Array de objetos con las obras de Laurie Anderson
let obras = [

	{
		imagen: "img/laurie.jpg",
		nombre: "United States",
		anio: "1984"
	},

	{
		imagen: "img/laurie1.jpg",
		nombre: "Night Life",
		anio: "2007"
	},

	{
		imagen: "img/laurie2.jpg",
		nombre: "The Record Of The Time: Sound In The Work Of Laurie Anderson",
		anio: "2002"
	},

	{
		imagen: "img/laurie3.jpg",
		nombre: "Stories from the Nerve Bible: A Retrospective: 1972-1992",
		anio: "1994"
	},

	{
		imagen: "img/laurie4.jpg",
		nombre: "Laurie Anderson (By Roselee Goldberg)",
		anio: "2000"
	}

];

// Variable que guarda la posición de la obra que se está mostrando
let posicion = 0;

// Seleccionamos el contenedor donde aparecerá la galería
let galeria = document.querySelector("#galeria");

// Mostramos la primera obra al cargar la página
mostrarObra();

// Función que muestra la obra correspondiente a la posición actual
function mostrarObra(){

	galeria.innerHTML =

	'<img src="' + obras[posicion].imagen + '" alt="' + obras[posicion].nombre + '">' +

	'<h3>' + obras[posicion].nombre + '</h3>' +

	'<p>Año: ' + obras[posicion].anio + '</p>' +

	'<button id="siguiente">Siguiente obra</button>';

	// Seleccionamos el botón creado con JavaScript
	let boton = document.querySelector("#siguiente");

	// Esperamos el clic del usuario para cambiar de obra
	boton.addEventListener("click", cambiarObra);

}

// Función que avanza a la siguiente obra
function cambiarObra(){

	// Pasamos a la siguiente posición del array
	posicion++;

	// Si llegamos al final, volvemos a la primera obra
	if(posicion == obras.length){

		posicion = 0;

	}

	// Actualizamos la información mostrada en la galería
	mostrarObra();

}