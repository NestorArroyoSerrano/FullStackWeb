function eliminarApariciones(str, substring) {
    // Creamos una expresión regular para buscar todas las apariciones de la substring, ignorando mayúsculas y minúsculas
    const regex = new RegExp(substring, 'gi');
    
    // Usamos el método replace para reemplazar todas las apariciones de la substring con una cadena vacía
    const resultado = str.replace(regex, '');
    
    return resultado;
}
/*
Explicación del código:

Creamos una función llamada eliminarApariciones que recibe dos parámetros: str y substring, que son los dos strings que queremos procesar.

Creamos una expresión regular llamada regex que busca todas las apariciones de substring en str, ignorando mayúsculas y minúsculas. 
Para lograr esto, usamos el constructor RegExp y le pasamos dos argumentos: substring como patrón de búsqueda y la cadena 'gi' como opciones. 
La opción 'g' significa "global", lo que indica que queremos buscar todas las apariciones en la cadena, no solo la primera. 
La opción 'i' significa "case insensitive", lo que hace que la búsqueda sea insensible a mayúsculas y minúsculas.

Usamos el método replace() en str para reemplazar todas las apariciones de regex con una cadena vacía (''). Esto elimina todas las apariciones de substring en str.

Retornamos el resultado de la operación de reemplazo.

Ahora puedes probar la función con algunos ejemplos:
*/

console.log(eliminarApariciones('Hoy es un buen día para programar en JavaScript', 'un')); // Devuelve 'Hoy es  buen día para programar en JavaScript'
console.log(eliminarApariciones('El lenguaje de programación JavaScript es muy popular', 'javascript')); // Devuelve 'El lenguaje de programación  es muy popular'
console.log(eliminarApariciones('La práctica hace al maestro', 'xyz')); // Devuelve 'La práctica hace al maestro'


/* en javascript Dada la raíz de un árbol binario, devuelve su profundidad máxima.

La profundidad máxima de un árbol binario es el número de nodos a lo largo del camino más largo desde el nodo raíz hasta el nodo hoja más lejano. */

//Para obtener la profundidad máxima de un árbol binario en JavaScript, puedes implementar un algoritmo de búsqueda en profundidad (DFS) para recorrer el árbol 
//y calcular la profundidad máxima a medida que se visita cada nodo.

//Aquí te muestro cómo puedes hacerlo utilizando una función recursiva que toma el nodo raíz como argumento:
function profundidadMaxima(nodo) {
    if (nodo==null) {
    return 0;

    }

    const izquierda = profundidadMaxima(nodo.izquierda);
    const derecha = profundidadMaxima(nodo.derecha);
    
    return 1 + Math.max(izquierda, derecha);
    
}
/*En esta implementación, la función profundidadMaxima toma un nodo de árbol binario como argumento y devuelve su profundidad máxima. Si el nodo es nulo, 
la profundidad máxima es 0. De lo contrario, la función calcula la profundidad máxima de los subárboles izquierdo y derecho, y devuelve el máximo de los dos, más 1 para incluir el nodo actual.

Puedes llamar a esta función con la raíz del árbol para obtener la profundidad máxima del árbol completo. Por ejemplo:*/


const raiz = {
  valor: 1,
  izquierda: {
    valor: 2,
    izquierda: {
      valor: 4,
      izquierda: null,
      derecha: null
    },
    derecha: null
  },
  derecha: {
    valor: 3,
    izquierda: null,
    derecha: null
  }
};

console.log(profundidadMaxima(raiz)); // 3
//En este ejemplo, se define un objeto que representa la raíz del árbol binario, y se llama a la función profundidadMaxima con este objeto 
//para obtener su profundidad máxima. El resultado es 3, ya que el camino más largo desde la raíz hasta un nodo hoja tiene 3 nodos.


