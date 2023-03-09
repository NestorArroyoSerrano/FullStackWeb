/*
document.querySelector("h3");
console.log(document.querySelector("h3"));
console.log(document.querySelector(".h3-danger"));
console.log(document.querySelector(".h3-danger"));
console.log(document.querySelector("#parrafo"));
console.log(document.getElementById("parrafo"));

console.log(document.querySelectorAll(".h3-danger"));
console.log(document.querySelectorAll("h3"));
*/
let parrafo = document.querySelector("#parrafo");
parrafo.textContent = "texto desde JS";
//parrafo.innerHTML = "<b>Texto con InnerhHTML</b>";

parrafo.classList.add("h3-danger");