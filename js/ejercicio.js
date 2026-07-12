// Cantidad de obras
let cantidadObras = document.querySelector("#cantidadObras");

// Datos de cada obra
let nombreObra = document.querySelector("#nombreObra");
let duracion = document.querySelector("#duracion");
let peso = document.querySelector("#peso");

// Datos generales
let tiempoMB = document.querySelector("#tiempoMB");
let costoMB = document.querySelector("#costoMB");

// Botones
let btnComenzar = document.querySelector("#btnComenzar");
let btnAgregar = document.querySelector("#btnAgregar");
let btnCalcular = document.querySelector("#btnCalcular");
let btnReiniciar = document.querySelector("#btnReiniciar");

// Lugar donde mostraremos los resultados
let resultado = document.querySelector("#resultado");


// Variables

// Array donde se almacenarán las obras
let repositorio = [];

// Cantidad de obras
let totalObras;

// Contador
let obrasIngresadas = 0;


// Función para limpiar los campos

function limpiarFormulario(){

	nombreObra.value = "";
	duracion.value = "";
	peso.value = "";

}


// Comenzar carga

btnComenzar.addEventListener("click", function(){

	totalObras = Number(cantidadObras.value);

	if(isNaN(totalObras) || totalObras <= 0){

		resultado.innerHTML =
		"Ingresá una cantidad válida de obras.";

	}
	else{

		cantidadObras.disabled = true;
		btnComenzar.disabled = true;

		nombreObra.disabled = false;
		duracion.disabled = false;
		peso.disabled = false;

		btnAgregar.disabled = false;

		resultado.innerHTML =
		"Ingresá los datos de la obra 1.";

	}

});


// Agregar obra

btnAgregar.addEventListener("click", function(){

	let nombre = nombreObra.value;

	let minutos = Number(duracion.value);

	let megas = Number(peso.value);


	if(

		nombre == "" ||

		isNaN(minutos) ||
		minutos <= 0 ||

		isNaN(megas) ||
		megas <= 0

	){

		resultado.innerHTML =
		"Completá correctamente todos los datos.";

	}
	else{

		let obra = {

			nombre:nombre,
			duracion:minutos,
			peso:megas

		};

		repositorio.push(obra);

		obrasIngresadas++;

		limpiarFormulario();

		if(obrasIngresadas < totalObras){

			resultado.innerHTML =
			"Ingresá los datos de la obra " +
			(obrasIngresadas + 1) + ".";

		}
		else{

			nombreObra.disabled = true;
			duracion.disabled = true;
			peso.disabled = true;

			btnAgregar.disabled = true;

			btnCalcular.disabled = false;

			resultado.innerHTML =
			"Todas las obras fueron cargadas. Ahora podés calcular los resultados.";

		}

	}

});


// Calcular resultados

btnCalcular.addEventListener("click", function(){

	let transferencia = Number(tiempoMB.value);

	let costo = Number(costoMB.value);

	if(

		isNaN(transferencia) ||
		transferencia <= 0 ||

		isNaN(costo) ||
		costo <= 0

	){

		resultado.innerHTML =
		"Ingresá correctamente los datos generales.";

	}
	else{

		// Variables

		let duracionTotal = 0;

		let pesoTotal = 0;

		let mayorDuracion;

		let nombreMayor;

		let pesoMayor;


		// Recorremos el array

		for(let i = 0; i < repositorio.length; i++){

			duracionTotal =
			duracionTotal + repositorio[i].duracion;

			pesoTotal =
			pesoTotal + repositorio[i].peso;


			if(i == 0){

				mayorDuracion =
				repositorio[i].duracion;

				nombreMayor =
				repositorio[i].nombre;

				pesoMayor =
				repositorio[i].peso;

			}


			if(repositorio[i].duracion > mayorDuracion){

				mayorDuracion =
				repositorio[i].duracion;

				nombreMayor =
				repositorio[i].nombre;

				pesoMayor =
				repositorio[i].peso;

			}

		}

		// Cálculos

		let promedio =
		duracionTotal / repositorio.length;

		let tiempoDescarga =
		pesoMayor * transferencia;

		let presupuesto =
		pesoTotal * costo * 12;


		// Resultados

		resultado.innerHTML =

		"Duración total: " +
		duracionTotal +
		" minutos" +

		"<br><br>Duración promedio: " +
		promedio +
		" minutos" +

		"<br><br>Obra de mayor duración: " +
		nombreMayor +

		"<br>Tiempo de transferencia: " +
		tiempoDescarga +
		" ms" +

		"<br><br>Presupuesto anual del repositorio: $" +
		presupuesto;


		btnCalcular.disabled = true;

		btnReiniciar.disabled = false;

		tiempoMB.disabled = true;

		costoMB.disabled = true;

	}

});

// Reiniciar

btnReiniciar.addEventListener("click", function(){

	location.reload();

});