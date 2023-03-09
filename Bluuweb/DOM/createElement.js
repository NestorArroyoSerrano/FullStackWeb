let lista = document.getElementById("lista");
console.log(lista);

let li = document.createElement("li");
li.textContent = "primer elemento"

lista.appendChild(li);

let arrayElement = ["primer elemento", "segundo", "tercero"];

arrayElement.forEach(item => {
//console.log(item);
let li = document.createElement("li");
li.textContent = item;
lista.appendChild(li)
});

arrayElement.forEach(item=> {
    lista.innerHTML += `<li>${item}</li>`

});
    