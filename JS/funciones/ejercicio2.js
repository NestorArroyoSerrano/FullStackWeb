	
	function pedirNumero(){
		let numero;
		do{
			numero=prompt("Dame un numero");
			if(numero<1 || numero>10)
				alert("Error, el número debe estar entre 1 y 10");
			if(numero=="")
				alert("Error!, el número no puede ser vacío");
			if(isNaN(numero))
				alert("Error!, no me has dado un número");
		}while(isNaN(numero) || numero=="" || numero<1 || numero>10);	
		return +numero;
	}
	
	let num1=pedirNumero();
	let num2=pedirNumero();
	
	let modo;
	
	do{
		modo=prompt("Dame el Modo de Visualización (PARRAFOS/LISTA/TABLA)");
		if(modo!="PARRAFOS" && modo!="LISTA" && modo!="TABLA")
			alert("Error! no me has puesto un modo válido");
	}while(modo!="PARRAFOS" && modo!="LISTA" && modo!="TABLA");

	let tabla,filas;
	
	if(num1>num2){
		tabla=num2;
		filas=num1;
	}
	else{
		tabla=num1;
		filas=num2;			
	}	
	
	if(modo=="LISTA"){
		document.write("<ul>");
		for(let i=1;i<=filas;i++)
			document.write("<li>"+tabla+"x"+i+"="+(tabla*i)+"</li>");
		document.write("</ul>");
	}
	else if(modo=="PARRAFOS"){
		
	}
	else if(modo=="TABLA"){
		
	}
	else if(modo=="DESPLEGABLE"){
		<select>
			<option>
				
			</option>
		</select>
		
	}
	/*function hacerLista(){
		document.write("<tabla>");
		for(let i=1 ; i<=grande ;i++)
			document.write("<li>"+peque+"x"+i+"="+(peque*i)+"</li>");

		document.write("</ul>");
	}*/
	
	