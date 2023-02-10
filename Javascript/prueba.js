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



//ejercicio 11 documento 1
/*
Solicita 2 números al usuario y debes devolver lo siguiente:
•
Cantidad de pares
•
Cantidad de Impares
•
Cantidad de positivos
•
Cantidad de negativos
•
Muestra todos los números que hay entre uno y otro, contando ambos.
•
Devuelve la suma de todos
•
Devuelve el factorial del mayor de los números
*/
/*
let num1, num2;
do {
  num1 = +prompt("Introduce el primer número: ");
  num2 = +prompt("Introduce el segundo número: ");
} while (isNaN(num1) || isNaN(num2));

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;
let suma = 0;

for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
  console.log(i);
  suma += i;

  if (i % 2 === 0) {
    pares++;
  } else {
    impares++;
  }

  if (i > 0) {
    positivos++;
  } else if (i < 0) {
    negativos++;
  }
}

console.log("Cantidad de pares: " + pares);
console.log("Cantidad de impares: " + impares);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de negativos: " + negativos);
console.log("Suma total: " + suma);

const mayor = Math.max(num1, num2);
let factorial = 1;

for (let i = 1; i <= mayor; i++) {
  factorial *= i;
}

console.log("Factorial del número mayor: " + factorial);
*/
let num1;
let num2;

do {
  num1 = +prompt("Introduce el primer número")
  num1 = +prompt("Introduce el segundo número")
}while (isNaN(num1) || isNaN(num2));

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for (let i =  Math.min(num1, num2); i<= Math.max(num1, num2); i++) {
console.log(i);
suma+=i;

if(i%2===0) {
  pares++;
}else{
  impares++;
}
if(i>0) {
  positivos++;
} else if(i<0) {
  negativos++;
}
}
console.log("Cantidad de pares: " + pares);
console.log("Cantidad de impares: " + impares);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de negativos: " + negativos);
console.log("Suma total: " + suma);

const mayor = Math.max(num1, num2);
let factorial = 1;

for (let i = 1; i <= mayor; i++) {
  factorial *= i;
}

console.log("Factorial del número mayor: " + factorial);


/*



let num, num2;



do {

  num = prompt("Dame un número");

  if (num == "")

    alert("Error!, el número no puede ser vacío");

  if (isNaN(num))

    alert("Error!, te he dicho que me des un número");

} while (isNaN(num) || num == "");

do {

  num2 = prompt("Dame otro número");

  if (num2 == "")

    alert("Error!, el número no puede ser vacío");

  if (isNaN(num2))

    alert("Error!, te he dicho que me des otro número");

} while (isNaN(num2) || num2 == "");

num = +num;

num2 = +num2;



let peque, grande;



/*

  let peque=(num>num2)?num2:num;

  let grande=(num>num2)?num:num2;

*/

/*

  let peque=Math.min(num,num2);

  let grande=Math.max(num,num2);

*/

/*

if (num > num2) {

  peque = num2;

  grande = num;

}

else {

  peque = num;

  grande = num2;

}



let cadena = "";

let suma = 0;

let factorial = 1;

let positivos = 0;

let negativos = 0;

let pares = 0;

let impares = 0;

let empezar;

if (peque < 1)

  empezar = peque;

else

  empezar = 1;





for (let i = empezar; i <= grande; i++) {

  if (i >= peque) {

    cadena = cadena + " " + i;

    if (i >= 0)

      positivos++;

    else

      negativos++;



    if (i % 2 == 0)

      pares++;

    else

      impares++;



    suma = suma + i;

  }

  if (i > 0)

    factorial = factorial * i;

}

//for(let i=grande;i>=1;i--)

//factorial=factorial*i;



console.log("CADENA:" + cadena);

console.log("PARES:" + pares);

console.log("IMPARES:" + impares);

console.log("POSITIVOS:" + positivos);

console.log("NEGATIVOS:" + negativos);

console.log("SUMA TOTAL:" + suma);

if (grande > 0)

  console.log("FACTORIAL DE " + grande + ":" + factorial);

else

  console.log("NO HAY FACTORIAL");
  */