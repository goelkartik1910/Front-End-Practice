let title = document.getElementById("title")
console.log(title.innerText);

title.innerText = "Chnaging DOM"
console.log(title.innerText);

let listItem = document.querySelector("li");
console.log(listItem);

// let listItem = document.querySelector(".item"); // if you want to pick using class
// console.log(listItem);

listItem.innerText = "Item 1"
console.log(listItem.innerText);

listItem.style.border = "1px solid black";

let li = document.querySelectorAll("li");
li.forEach(item => {
    item.innerText = "Items"
})

