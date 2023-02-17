/*Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno, pero con los elementos separados por "==>" (Join)):
•Crea un array con 4 elementos numéricos
•Concatena 2 elementos más al final y 2 al principio (unshift y push)
•Elimina las posiciones de la 3 a la 5 (incluida) (splice)
•Inserta 2 elementos más entre el penúltimo y el último (splice)
•Invierte el array (reverse)
•Muestra el array ordenado (sort)*/

//•Crea un array con 4 elementos numéricos
/*
let a = [1,2,3,4];
console.log(a.join("==>"));
//•Concatena 2 elementos más al final y 2 al principio (unshift y push)
a.push(6);
a.push(7);
a.unshift(8);
a.unshift(9);
console.log(a.join("==>"));
//•Elimina las posiciones de la 3 a la 5 (incluida) (splice)
a.splice(3,3);
console.log(a.join("==>"));
//•Inserta 2 elementos más entre el penúltimo y el último (splice)
a.splice(a.length-1,0,80,90); // NO elimina ninguno porque has puesto el 0. // le dices que se ponga en esa posicion, no elimine y añada los valores, entonces el ultimo se mantiene ultimo
console.log(a.join("==>"));
//•Invierte el array (reverse)
a.reverse();
console.log(a.join("==>"));
//•Muestra el array ordenado (sort)
a.sort();
console.log(a.join("==>"));
*/

let semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for(let index in semana) {
console.log(semana[index]);
}
for (let index in semana) {
    console.log(semana[index]);
}
for(let item of semana) {
console.log(item);
}
// 1) Devolver otro array con el número de la semana
let diasSemanaNumerados = semana.map((dia, index) => {
    return dia + " " + (index + 1);
  });
  console.log(diasSemanaNumerados);

// 2) Imprimir otro array con elementos que acaben en consonante
var diasTerminanConsonante = semana.filter(dia => {
    var ultimaLetra = dia[dia.length - 1];
    return ultimaLetra !== "a" && ultimaLetra !== "e" && ultimaLetra !== "i" && ultimaLetra !== "o" && ultimaLetra !== "u";
  });
  console.log(diasTerminanConsonante);
  
  // 3) Indicar si algún día tiene 2 vocales a o e en el nombre
  var hayDosVocales = semana.some(dia => {
    var numVocales = 0;
    for (var i = 0; i < dia.length; i++) {
      if (dia[i] === "a" || dia[i] === "e" || dia[i] === "i" || dia[i] === "o" || dia[i] === "u") {
        numVocales++;
        if (numVocales >= 2) {
          return true;
        }
      }
    }
    return false;
  });
  console.log(hayDosVocales);
  
  // 4) Ordenar el array de días descendentemente
  var diasSemanaOrdenados = semana.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(diasSemanaOrdenados);
