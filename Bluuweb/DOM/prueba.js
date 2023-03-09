
let lista = document.getElementById("lista");

let arrayLista = ["item 1", "item 2", "item 3"]
/*
let fragment = document.createDocumentFragment()
arrayLista.forEach(item => {
    let li = document.createElement("li")
    li.classList.add("list")
    let b = document.createElement("b")
    b.textContent = "Nombre: "
    li.appendChild(b)
    let span = document.createElement("span");
    span.classList.add("text-danger");
    span.textContent = item 
    li.appendChild(b)
    li.appendChild(span)
    fragment.appendChild(li)
})

lista.appendChild(fragment)
*/
/*
let fragment = ''
arrayLista.forEach(item => {
    fragment += `
    <li class = "list">
    <b>Nombre: </b> <span class="text-danger">${item}</span>
    </li>

    `   
})
lista.innerHTML = fragment
*/
let template = document.querySelector("#template-li").content;
let fragment = document.createDocumentFragment();
console.log(template);
    arrayLista.forEach(item => {
        template.querySelector('.list span').textContent = item;
       // template.querySelector('.text-danger').textContent = item;
       const clone = template.cloneNode(true);
       fragment.appendChild(clone);      
    })

    lista.appendChild(fragment);
