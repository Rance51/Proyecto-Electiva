//contenedor-mensajes, mensaje, boton-enviar 

//variabbles
const contenedor__mensajes = document.getElementById('contenedor-mensajes');
const mensajes = document.getElementById('mensaje');
const boton__enviar = document.getElementById('boton-enviar');
var primer_enviado = true
//Definicion llamada funcion
boton__enviar.addEventListener("click", enviar_msg);


//funciones
function enviar_msg(){
	/*let contenedor__burbuja = document.createElement('div');
	let burbuja = document.createElement('div');
	let burbuja__texto = document.createElement('div');
	let div = document.createElement('div');
	let texto = document.createElement('div');
	let hora = document.createElement('div');

	//Clases
	contenedor__burbuja.classList.add('bubble-container', 'right');
	burbuja.classList.add('bubble');
	burbuja__texto.classList.add('bubble-text');
	hora.classList.add('bubble-info');
	texto.classList.add('texto');


	texto.innerHTML = mensajes.innerHTML;


	//hora
	let momentoActual = new Date();
	let hora_2 = momentoActual.getHours();
	if (hora_2>12) {hora_2 -= 12;};
	let minuto = momentoActual.getMinutes();
	let horaImprimible = hora_2 + ":" + minuto;
	hora.innerHTML = " " + horaImprimible;

	//Asignación de hijos
	contenedor__burbuja.appendChild(burbuja);
	burbuja.appendChild(burbuja__texto);
	burbuja__texto.appendChild(div);
	div.appendChild(texto);
	div.appendChild(hora);

	//Anexar mensajes a la pagina
	contenedor__mensajes.appendChild(contenedor__burbuja);

	mensajes.innerHTML = ' ';*/


	if (mensaje.innerHTML != "") {
		let p = document.createElement("p");
		let separador = document.createElement("div");
		let hora = document.createElement("div");
		let contenedor_p = document.createElement("div");


		separador.style.maxWidth = "50%";
		separador.style.height = "auto";
		p.innerHTML = mensajes.innerHTML;
		
		hora.classList.add("hora");
		contenedor_p.classList.add("container_p");
		contenedor_p.style.float = "right";
		contenedor_p.style.padding = "10px";
		p.style.marginBottom = "10px";
		hora.style.float = "right";

		let momentoActual = new Date();
		let hora_2 = momentoActual.getHours();
    	if (hora_2>12) {hora_2 -= 12;};
    	let minuto = momentoActual.getMinutes();
    	let horaImprimible = hora_2 + ":" + minuto;
		hora.innerHTML = " " + horaImprimible;
		contenedor_p.appendChild(p);
		contenedor_p.appendChild(hora);

			if (primer_enviado) {
				contenedor_p.classList.add("enviados", "primer_enviado");
				primer_enviado = false;
			}else{
				contenedor_p.classList.add("enviados");
			}
		separador.appendChild(contenedor_p);
		contenedor__mensajes.appendChild(separador);
		mensajes.innerHTML = "";
	}
	
}