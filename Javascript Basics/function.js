function add(a, b) {
    console.log(a + b);
}

add(3, 5);

let c = 10;
function sum(b) {
    console.log("The sum is:", b + c);
}

// sum is inpure as it gives different value even on same values
// it happens because impure functions depends on outside value

sum(20);
c = 15;
sum(20);

let func = function(){ //anynoymus function --> functions with no name
    console.log("func declaration")
}

console.log(func);
func();


//Arrow Function
let printName = () => {
    console.log("Name: ", "Kartik Goel")
}
printName();