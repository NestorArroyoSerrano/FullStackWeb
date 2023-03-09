"use strict";
console.log("Hola");
// EJERCICIO 1
let nombre;
nombre = "Pablo";
let edad;
edad = 30;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};
let p2 = { nombre: "Pablo", edad: 30 };
// EJERCICIO 2
class Rombo {
    constructor(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    calcularArea() {
        return this.diagonalVertical * this.diagonalHorizontal;
    }
}
let r1 = new Rombo(10, 20);
document.write("El área del Rombo es: " + r1.calcularArea());
