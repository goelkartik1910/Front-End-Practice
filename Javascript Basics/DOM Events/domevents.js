let counter = 0;

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

// divEle.remove();

function counterup() {
    counter++;
    console.log(counter);
}

function printHello() {
    console.log("Hello");
}

let heading =  document.createElement("h1");
heading.innerText = "Counter App";


let incbtn = document.createElement("button");
incbtn.innerText = "JS +1";

let count = document.createElement("p");

incbtn.addEventListener("click", incrementCounter);

let decbtn = document.createElement("button");
decbtn.innerText = "JS -1";

decbtn.addEventListener("click", decrementCounter);

divEle.appendChild(heading);
divEle.appendChild(count);
divEle.appendChild(incbtn);
divEle.appendChild(decbtn);

let clickBtn = document.getElementById("clickBtn");
console.log(clickBtn);

clickBtn.addEventListener("click", callEventListener);
function callEventListener() {
    console.log("You clicked callEventListener");
}

function incrementCounter() {
    counter++;
    count.innerText = counter;
}

function decrementCounter() {
    counter--;
    count.innerText = counter;
}

