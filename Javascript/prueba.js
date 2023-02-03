'use sctrict';
/*console.log("Hola mundo");

const pi=3.1416;
var x;
let y; //más aconsejable

console.error("Hola tuano");
alert("Yiii");
prompt("Dame un número");

for(let i=0; i<100; i++)
if(i%2==0)
    document.write("<p>PARRAFO PAR</p>");
    else
    document.write("<p>PARRAFO IMPAR</p>");
    */

    /*
let n1=parseInt(prompt("Dame un número")); // Para sacar un popup. // Se usa el parseInt para covertir el String en int. También sirve el: let n2=Number(prompt....)
let n2=+prompt("Dame otro número"); //Para sacar otro popup pidiéndole al usuario que ingrese otro número // +prompt para convertir un String en un número

let mayor;
if(n1>n2){
alert(n1 + " es mayor que " +n2);
mayor=n1;
}
else if(n1<n2){
alert(n1 + " es menor que " + n2);
mayor=n2;
}
else{
alert(n1 + " es igual que "+ n2);
mayor=n1;
}
let p;
for(let i=1; i<=mayor;i++){
    let p=prompt(" Dame el texto del párrafo " +i);
    document.write("<p>"+p+"</p>");
}
*/
/*
const string = prompt("Ingrese una frase:");

let contador = 0;
const vocales = "aeiouAEIOU";

for (const char of string) {
  if (vocales.includes(char)) {
    contador++;
  }
}

console.log(`La frase tiene ${contador} vocales.`);

const string2 = prompt("Ingrese una frase:");
let reversedString = "";

for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string2[i];
}

console.log(`La frase invertida es: ${reversedString}`)
*/

/*
let cadena=prompt("Dame la cadena");
let contadorVocales=0;
let cadenaReves="";

for(let i=0; i<cadena.length; i++){
    if(cadena.charAt(i).toLowerCase()=="a" || cadena.charAt(i).toLowerCase()=="e" || cadena.charAt(i).toLowerCase()=="i" || cadena.charAt(i).toLowerCase()=="o" 
    || cadena.charAt(i).toLowerCase()=="u" )
    contadorVocales++;
    cadenaReves=cadena.charAt(i)+cadenaReves; // lo que hace es letra + cadena
}
alert("Cantidad de vocales es:" +contadorVocales +"\ncadena al revés:" +cadenaReves);
*/

