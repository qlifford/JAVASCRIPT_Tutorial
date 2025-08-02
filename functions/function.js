function printMe() {
    console.log('I get called from funcions.js!');
}

function printThis(parameter) {
    console.log(parameter);
}

// default parameter example
function greet(age, name = 'Guest') {    
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
// Arrow function example
const arrowFunction = () => {
    console.log('This is an arrow function');
}
// rest operator example
const restFunction = (...args) => {
    console.log('Rest operator example:', args);
}

// nested function example
function outerFunction() {      
    function innerFunction() {
        console.log('This is the inner function');
    }
    innerFunction();
}
// global variable example
let globalVar = 'I am a global variable';   
function printGlobalVar() {
    console.log(globalVar);
}

// local variable example
const localVariable = function () {
  let localVar = "I am a local variable";
  console.log(localVar);
  // Uncommenting the next line will cause an error because localVar is not defined outside this function
  // console.log(globalVar);
};
console.log('Global variable:', globalVar);
console.log('Local variable:', localVar);

function main() {
    printMe();
    printThis("Yoyoyo");
    greet(30, 'Alice');
    greet(25); // Using default parameter
    arrowFunction();
    outerFunction();
    restFunction(10, 20, 30);
    
}
main();