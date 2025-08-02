const form = document.getElementById('form');
const uname = document.getElementById('uname');
const email = document.getElementById('email');
const pwd1 = document.getElementById('pwd1');
const pwd2 = document.getElementById('pwd2');
const errorElements = document.querySelectorAll('.error');


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});
// const setError = (element, message) => {
//     const errorElement = element.nextElementSibling;
//     errorElement.innerText = message;
//     message.style.border = "1px solid red";
//     message.style.color = "red";
//     element.classList.add('error');
//     element.classList.remove('success');
// };
// const setSuccess = element => {
//     const errorElement = element.nextElementSibling;
//     errorElement.innerText = '';
//     errorElements.style.border = "1px solid green";
// };

function validateInputs() {
    const unameValue = uname.value.trim();
    const emailValue = email.value.trim();
    const pwd1Value = pwd1.value.trim();
    const pwd2Value = pwd2.value.trim();

    if (unameValue === '' || emailValue === '' || pwd1Value === '') {
        alert('All fields must be filled out');
        return false;
    }
    else{
      return true;
        // alert("Success");
    }
  }

