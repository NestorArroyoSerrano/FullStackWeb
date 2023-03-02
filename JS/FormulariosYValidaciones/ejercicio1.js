window.onload=function(){
    //Acceso por ID: Esta forma utiliza el método getElementById para obtener la referencia al elemento a partir de su id.
    const emailInput = document.getElementById("email");
    console.log(emailInput.type);
    // Acceso por etiqueta: Esta forma utiliza el método getElementsByTagName para obtener todas las etiquetas input del formulario y 
    //luego acceder al segundo elemento (índice 1) que corresponde al input del correo electrónico.
    const form = document.getElementsByTagName("form")[0];
    const emailInput2 = form.getElementsByTagName("input")[1];
    console.log(emailInput2.type);
}
/*
Usando el HTML del aula virtual.
1.
Imprime por el console.log el TYPE del input del correo electrónico y el ID del desplegable ROL usando las 3 formas de acceso.
2.
Imprime por el console.log el NAME de todos los controles del formulario, usando las 3 formas de acceso.*/