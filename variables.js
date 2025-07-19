// A variable is a container for storing data values.
// In JavaScript, there are three types of variables: var, let, and const.

// var: Declares a variable that can be re-assigned.
// let: Declares a block-scoped variable that can be re-assigned.
// const: Declares a block-scoped variable that cannot be re-assigned.

const Name = 'cliff'; // string literal
const Age = 45; // number literal
const IsActive = true; // boolean literal
let firstName; // Undefined literal
let interest = null; // null literal
// Objects
const person = {
    Name,
    Age
}
console.log(person.Name);
console.log(typeof firstName); // undefined
console.log(typeof interest); // object (null is a special case in JavaScript)