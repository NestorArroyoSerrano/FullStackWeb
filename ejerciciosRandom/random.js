
window.onload = function () {
/*let edad;
do {
    edad = +prompt("Dime tu edad");
} while (isNaN(edad) || edad<0 || edad>120 );

if (edad >= 18) {
alert("Es mayor de edad, puedes conducir");
}else {
    alert("Es menor de edad, no puedes conducir");
    

}
*/
let suma = 0;

while (true) {
  let numero = prompt("Introduce un número:");

  // Si el usuario pulsa cancelar o introduce un valor no numérico, salimos del ciclo
  if (numero === null || isNaN(numero)) {
    break;
  }

  // Convertimos el valor introducido a un número y lo sumamos
  suma += Number(numero);
}

// Mostramos la suma total de los números introducidos
alert("La suma total de los números introducidos es: " + suma);
}