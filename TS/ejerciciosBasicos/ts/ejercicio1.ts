console.log("Hola");

// EJERCICIO 1

let nombre:string;
nombre = "Pablo";
let edad:number;
edad = 30;
const PERSONAJE:object = {
    nombre: nombre,
    edad: edad
};

interface PERSONAJE2{
    nombre:string;
    edad:number;

}

let p2: PERSONAJE2={nombre:"Pablo",edad:30};

// EJERCICIO 2

class Rombo{

    constructor(public diagonalVertical:number,public  diagonalHorizontal:number){}

    calcularArea():number{
        return this.diagonalVertical * this.diagonalHorizontal;
    }   
}

let r1:Rombo=new Rombo(10,20);
document.write("El área del Rombo es: "+r1.calcularArea());