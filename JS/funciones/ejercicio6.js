
	/*
	function replaceString(str, toReplace, replacement) {
		return str.split(toReplace).join(replacement);
	  }

let str = prompt("Introduce la cadena:");
let toReplace = prompt("Introduce la cadena a buscar:");
let replacement = prompt("Introduce la cadena de reemplazo:");
let result = str.replace(toReplace, replacement);
console.log(result);
*/

let s1="holalalalala";
let s2="la";
let s3="x";

console.log(s1.replaceAll(s2,s3));
let posicion;
let posEmpezar=0;
let veces= 0;
let resultado=s1;
do{
	posicion=s1.indexOf(s2,posEmpezar);
	if(posicion!=-1){
		posEmpezar=s2.length+posicion;
		veces++;
        resultado=resultado.replace(s2,s3);
	}
}while(posicion>-1);
alert(veces);
alert(resultado);
//alert(s1.replaceAll(s2,s3));
