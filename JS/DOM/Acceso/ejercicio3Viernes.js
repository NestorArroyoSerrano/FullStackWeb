/*
	
	1) Pide al usuario filas y columnas
	
	2) Haz una tabla con esas filas y columnas usando DOM en el TABLE del HTML
	Poniendo número empezando por 1. 
	La tabla debe tener 2px solida y color verde. Y debe estar colapsada.
	3) Si pulsas sobre un TD multiplica por 2 el valor de la celda
	4) Si pasas el ratón por encima del TD que el borde del mismo se ponga
	con rojo y de 10px de grosor
	5) Si sale el ratón del TD vuelve a su borde normal

*/	



window.onload=function(){
    let filas;
    let columnas;
    do {
    filas = +prompt("Ingrese la cantidad de filas");
    columnas = +prompt("Ingrese la cantidad de columnas");

    }while(isNaN(filas) || filas=="" || filas<1 || isNaN(columnas) || columnas=="" || columnas<1);
    let tabla = document.getElementById('miTabla');
		let cabecera = tabla.createTHead();
		let filaCabecera = cabecera.insertRow();
		for (let j = 0; j < columnas; j++) {
			let celdaCabecera = filaCabecera.insertCell();
			celdaCabecera.innerHTML = 'Columna ' + (j+1);
			celdaCabecera.style.fontWeight = 'bold';
		}

		let cuerpo = tabla.createTBody();
		for (let i = 0; i < filas; i++) {
			let fila = cuerpo.insertRow();
			for (let j = 0; j < columnas; j++) {
				let celda = fila.insertCell();
				celda.innerHTML = (i*columnas + j + 1);
				celda.addEventListener('click', function() {
					let valor = parseInt(this.innerHTML);
					this.innerHTML = valor * 2;
				});
				celda.addEventListener('mouseover', function() {
					this.style.border = '10px solid red';
				});
				celda.addEventListener('mouseout', function() {
					this.style.border = '1px solid black';
				});
			}
		}
}
/*
En el archivo HTML, crea un elemento table con un id para identificarlo fácilmente en JavaScript.
Dentro de esta función, puedes utilizar el método lastChild para seleccionar el último párrafo y eliminarlo utilizando el método remove.
Crea otra función en JavaScript para generar la tabla con las filas y columnas especificadas por el usuario. 
Esta función deberá tomar los valores de las filas y columnas del usuario utilizando el método prompt y 
crear una tabla con las etiquetas HTML table, thead, tbody, tr, th y td.
Para asignar números a cada celda de la tabla, puedes utilizar un bucle for anidado que recorra cada fila y columna y asignar el número correspondiente a cada celda.
Agrega estilos CSS para la tabla, de modo que tenga un borde sólido verde de 2px y esté colapsada.
Agrega un controlador de eventos para el evento click en cada celda de la tabla. 
Dentro de este controlador de eventos, utiliza la propiedad innerHTML del elemento seleccionado para obtener el valor actual de la celda, 
conviértelo en un número y multiplica por 2. Luego, asigna el valor multiplicado de nuevo a la propiedad innerHTML del elemento.
Agrega controladores de eventos para los eventos mouseover y mouseout en cada celda de la tabla. 
Dentro de estos controladores de eventos, cambia el borde del elemento seleccionado a rojo y de 10px de grosor cuando el ratón esté sobre la celda, 
y vuelve al borde normal cuando el ratón salga de la celda.
En la función que crea la tabla, creamos un objeto cabecera y lo insertamos en la tabla utilizando el método createTHead. 
Luego, creamos una fila de cabecera utilizando el método insertRow y un bucle for para crear las celdas de cabecera con el texto "Columna X". 
Estilizamos las celdas de cabecera en negrita utilizando style.fontWeight.

Luego, creamos un objeto cuerpo y lo insertamos en la tabla utilizando el método createTBody. 
Dentro de un bucle for anidado, creamos una fila y varias celdas por fila utilizando los métodos insertRow e insertCell. 
En cada celda, asignamos un número consecutivo utilizando la fórmula (i*columnas + j + 1). 
Luego, agregamos controladores de eventos para los eventos click, mouseover y mouseout, que realizan las acciones correspondientes.

Con esto, deberías tener una tabla interactiva que cumple con todos los requisitos solicitados en la pregunta.
*/