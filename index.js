let message = "My age is: ";
let number = 38;
let age = message + number;
console.log(age);
document.write(age);

let secondMessage = "Too young to learn JavaScript"
let actualAge = message + secondMessage;
console.log("On second thought... " + actualAge);
document.write("<br>On second thought... " + actualAge);

let badMath = 1 > 2;
console.log("1 > 2 is " + badMath);
document.write("<br>1 > 2 is " + badMath);

let secondNumber = 10;
let add = number + secondNumber;
let substract = number - secondNumber;
let multiply = number * secondNumber;
let divide = number / secondNumber;
console.log("38 + 10 equals " + add);
document.write("<br>38 + 10 equals " + add);
console.log("38 - 10 equals " + substract);
document.write("<br>38 - 10 equals " + substract);
console.log("38 x 10 equals " + multiply);
document.write("<br>38 x 10 equals " + multiply);
console.log("38 / 10 equals " + divide);
document.write("<br>38 / 10 equals " + divide);


function greeting (name) {
    return "Hello " + name;
}

console.log(greeting("dear reader"));
document.write("<br>" + greeting("dear reader"));

function sum (numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    return numberOne + " plus " + numberTwo + ' equals ' + result;
}

console.log(sum(5, 2));
document.write("<br>" + sum(5, 2));

let evenOrOdd = 7;

if (evenOrOdd % 2 == 0) {
    console.log("The number " + evenOrOdd + " is even");
    document.write("<br>The number " + evenOrOdd + " is even");
}

else {
    console.log("The number " + evenOrOdd + " is odd");
    document.write("<br>The number " + evenOrOdd + " is odd");
}

let car = {
    brand: "Audi",
    numberOfDoors: 4,
    parts: ["Chassis", "Wheels", "Seats"],
};

console.log("The brand of this car is: " + car.brand);
document.write("<br>The brand of this car is: " + car.brand);
console.log("This car has " + car.numberOfDoors + " doors");
document.write("<br>This car has " + car.numberOfDoors + " doors");
console.log("A part of this car is: " + car.parts[0]);
document.write("<br>A part of this car is: " + car.parts[0]);

let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numArray.length; i++) {
    console.log(i);
    document.write("<br>" + i);
}

numArray.push ("10");
console.log(numArray);
document.write("<br>" + numArray);

let oddNum = [];
function removeEven () {
    for (let i = 0; i < numArray.length; i++) {
        if (numArray [i] %2 !== 0) oddNum.push(numArray[i]);
}
console.log(oddNum);
document.write("<br>" + oddNum);
}

removeEven ();

