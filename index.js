let message = "My age is: ";
let number = 38;
let age = message + number;

let badMath = 1 > 2;

let secondNumber = 10;



let add = number + secondNumber;
let substract = number - secondNumber;
let multiply = number * secondNumber;
let divide = number / secondNumber;

let secondMessage = "Too young to learn JavaScript."
let actualAge = message + secondMessage;

console.log(badMath);
console.log(age);
console.log(actualAge);

function Greeting (name) {
    return "Hello " + name + ".";
}

console.log(Greeting("Víctor"));

function Addition (numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    return result;
}

console.log(Addition(5, 2));