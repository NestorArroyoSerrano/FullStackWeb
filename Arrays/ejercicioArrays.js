// Recorre un array de los días de la semana de 4 formas distintas

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

for(let i=0; i<dias.length; i++)
console.log(dias[i]);
for(let i in dias)
console.log(dias[i]);
for(let elemento of dias)
console.log(elemento);
dias.forEach(function(elemento){
    console.log(elemento);

});

// Devuelve otro array donde cada día  de la semana se le concatene el número de la semana de 1 a 7 (map)
let arrayMap=dias.map(function(elemento){
    return (elemento+ ""+ (i+1));
    let arrayMap=dias.map((elemento,i)=>elemento+ "" +(i+1));
    console.log(arrayMap.join()););
    

});

// Imprime otro array con los elementos que acaben en consonante

let arrayFilter=dias.filter(elemento=> {
    if(elemento.charAt(elemento.length-1)=="a"
    elemento.charAt(elemento.length-1)=="e"
    elemento.charAt(elemento.length-1)=="i"
    elemento.charAt(elemento.length-1)=="o"
    elemento.charAt(elemento.length-1))=="u";
    return false;
    else
    return true;
    
    // 3 indica si añgún día tiene 2 vocales a o e en el nombre (some)

    let cumple=dias.some(elemento=> {
        let a=0;
        let e=0;
        For(let i=0; i<elemento.length; i++) {
        }

});
    
    
    


