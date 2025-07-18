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

document.querySelector('.click-me').addEventListener('click', () => {
    const title = document.querySelector('.title');
    title.style.color = 'red';
    title.textContent = 'Hello Cliff';
    title.classList.add('new-class');
    console.log("Button clicked");
});