/*
function suma (a,b) {
    return (a+b);
}
*/

let suma:Function=(a:number,b:number):number=>(a+b);
//console.log(typeof (suma));

interface heroes{
    nombre:string;
    poderes:string[];
}

let spiderman:heroes={nombre:"",poderes: []};
spiderman.nombre = "Peter Parker";
spiderman.poderes =["trepar", "fuerza", "agilidad", "telas de araña"];