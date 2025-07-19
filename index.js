// Comment

// console.log("Welcome to Javascript");

// variables
const Name = 'cliff'; //string literal
const Age = 45; //number literal
const IsActive = true; //boolean literal
let firstName; //Undefined literal
const selectColor = 'blue'; //null literal

// Objects
const person = {
    name: 'Cliff',
    age: 34
}
// console.log(person)

// document.querySelector('.click-me').addEventListener('click', () => {
document.querySelector('.submit').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    let y = document.querySelector('.fname').value;
    let x = document.querySelector('.lname').value;
    let fulname = `${y} ${x}`;
    fulname = fulname.toString();  // Convert fulname to string if needed
    // fulname.style.color = 'red'; // Change color of fulname
    alert(`Hello ${fulname}, Welcome to JavasScript`);
});
console.log(Name)
