/*
function pedirNumero(texto,texto2){

    let numero;

    do{

        numero=prompt(texto);

        if(numero=="")

            alert("Error!, el número no puede ser vacío");

        if(isNaN(numero))

            alert(texto2);

    }while(isNaN(numero) || numero=="");	

    return +numero;

}



let num,num2;



num=pedirNumero("Dame un número","Error!, te he dicho que me des un número");

num2=pedirNumero("Dame otro número","Error!, te he dicho que me des otro número");
*/
/*
function sumar(x,y) {
    let resultado;
    resultado = x + y;
    return resultado;
}
sumar(2,4);
let x=sumar(8,2);
console.log(sumar(x,x));

console.log(sumar());
console.log(sumar(5));
console.log(sumar(2,3,4,5,67,8,1,2,3,3, "jajajajaja"));
*/

/*
function infoProducto(nombreProducto = "Producto genérico", precio = 100, impuesto = 21) {
    nombreProducto = String(nombreProducto);
    precio = Number(precio);
    impuesto = Number(impuesto);

    if (isNaN(precio) || isNaN(impuesto) || precio < 0 || impuesto < 0) {
        console.error(" O el precio del producto o el impuesto no son números válidos ");
        return;
    }
    const precioTotal = precio * (1 + impuesto / 100);
    console.log("Nombre del producto " + nombreProducto);
    console.log("Precio final con impuestos " + precioTotal);

}
infoProducto("Producto A", 200);
infoProducto("Producto B", 150, 15);
infoProducto();
infoProducto("Producto C", "200");
infoProducto("Producto D", 150, "15%");
infoProducto("Silla", -10, 34);

function ejercicio1(producto = "Producto genérico", precio = 100, impuesto = 21) {

    console.log("-----------EMPIEZA-----------");

    let nombre = producto + "";

    let price = +precio;

    let tax = +impuesto;



    if (isNaN(price) || isNaN(tax) || price < 0 || tax < 0) {

        console.error("El precio y/o el impuesto son incorrectos");

        return -1;

    }

    else

        //console.log("El producto "+nombre+" tiene un precio de:"+(price+(impuesto*price/100)));

        return price + (impuesto * price / 100);



    console.log("-----------ACABA-----------");



}



let x = ejercicio1();

console.log(ejercicio1("X"));

console.log(ejercicio1("X", 500));

console.log(ejercicio1("X", 500, 10));

console.log(ejercicio1(8, "jajaja"));

console.log(ejercicio1(10, 90, "jejeje"));

console.log(ejercicio1("PERA", 90, 5, 90, "OTRO", true));
*/

    function pedirNumero(num1, num2, seleccion){
        if (num1 < 1 || num1 > 10 || num2 < 1 || num2 > 10) {
            console.error("Error: los números deben estar entre 1 y 10");
            return;

        }
        let peque = Math.min(num1, num2);
        let grande = Math.max(num1, num2);

        
/*
        function hacerLista() { 
            document.write("<tabla>");
            for(let i=1; i<grande ; i++)
            document.write("<li>"+peque+"x"+i+"="+(peque*i)+"</li>");

            document.write("</ul>");
      */      

        

        switch (seleccion) {
            case "LISTA":
              for (let i = peque; i <= grande; i++) {
                document.write('${i} x ${j} = ${i * j}<br>');
                for (let j = 1; j <= 10; j++) {
                  document.write(`${i} x ${j} = ${i * j}`);
                }
              }
              break;
            case "PARRAFO":
              let result = "";
              for (let i = peque; i <= grande; i++) {
                result += `Tabla del ${i}:<br>`;
                for (let j = 1; j <= 10; j++) {
                  result += `${i} x ${j} = ${i * j}<br>`;
                }
              }
              document.write(result);
              break;
            case "TABLA":
              let table = "<table>";
              for (let i = peque; i <= grande; i++) {
                table += `<tr><td colspan="10">Tabla del ${i}:</td></tr>`;
                for (let j = 1; j <= 10; j++) {
                  table += `<tr><td>${i}</td><td>x</td><td>${j}</td><td>=</td><td>${i * j}</td></tr>`;
                }
              }
              table += "</table>";
              document.write(table);
              break;
            default:
              console.error("Error: Modo de visualización inválido");
              break;
          }
    }
        
        const num1 = parseInt(prompt("Introduce el primer número (1-10):"));
        const num2 = parseInt(prompt("Introduce el segundo número (1-10):"));
        const seleccion = prompt("Introduce el modo de visualización (LISTA, PARRAFO o TABLA):");
        
        pedirNumero(num1, num2, seleccion);
    
