const submitForm = (event) => {
    event.preventDefault();
    // console.log(`Submit Form`);

    let firstName = document.querySelector('[name="fname"]');
// console.log(firstName);

let lastName = document.querySelector('[name="lname"]');
// console.log(lastName);

console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);
}

let form = document.getElementById('form');

form.addEventListener('submit', submitForm);
