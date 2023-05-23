let message = "My age is: ";
let number = 38;
let age = message + number;
console.log(age);

let secondMessage = "Too young to learn JavaScript."
let actualAge = message + secondMessage;
console.log("On second thought... " + actualAge);

let badMath = 1 > 2;
console.log("1 > 2 is " + badMath);

let secondNumber = 10;
let add = number + secondNumber;
let substract = number - secondNumber;
let multiply = number * secondNumber;
let divide = number / secondNumber;
console.log("38 + 10 equals " + add);
console.log("38 - 10 equals " + substract);
console.log("38 x 10 equals " + multiply);
console.log("38 / 10 equals " + divide);


function Greeting (name) {
    return "Hello " + name + ".";
}

console.log(Greeting("Víctor"));

function Addition (numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    return numberOne + " plus " + numberTwo + ' equals ' + result;
}

console.log(Addition(5, 2));

let evenOrOdd = 6;

if (evenOrOdd % 2 == 0) {
    console.log("The number " + evenOrOdd + " is even.");
}

else {
    console.log("The number " + evenOrOdd + " is odd.");
}


