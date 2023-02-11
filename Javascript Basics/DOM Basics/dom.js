let title = document.getElementById("title")
console.log(title.innerText);

title.innerText = "Changing DOM"
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

// adding new items
let divEle = document.getElementsByTagName("div")[0];
console.log(divEle);
let orderedList = document.createElement("ol");
let li1 = document.createElement("li");
li1.textContent = "Apple";
let li2 = document.createElement("li");
li2.textContent = "Mango";
orderedList.appendChild(li1);
orderedList.appendChild(li2);
console.log(orderedList);

divEle.appendChild(orderedList);

// removing items from a list

divEle.remove();