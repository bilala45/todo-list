// Function to generate a template list element 
const createListTemplate = todoItem => {
    const template =
        `<li class="text-light list-group-item d-flex justify-content-between align-items-center">
            <span>${todoItem}</span>
            <i class="fas fa-trash delete"></i>
        </li>`;

    // Select todos class and append template to innerHTML
    document.querySelector('.todos').innerHTML += template;

    addItem.add.value = '';

}

// Select HTML element of .add
const addItem = document.querySelector(".add");

// Action for page submit
addItem.addEventListener('submit', event => {

    // Prevent page reload upon submit
    event.preventDefault();

    // Retrieve value in input field
    // Trim whitespace from beginning and end of text input
    const newTodoItem = addItem.add.value.trim();

    if (newTodoItem != '') {
        createListTemplate(newTodoItem);
    }



})