let lista = document.getElementById("lista");

let arrayItem = ["item1", "item2", "item3"];

let fragment = document.createDocumentFragment();

arrayItem.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;

    let childNode = fragment.firstChild;
    console.log(item, childNode);
   
    fragment.insertBefore(li, childNode);
    

});

lista.appendChild(fragment)

