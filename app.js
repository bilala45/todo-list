// Select HTML element of .add
const addItem = document.querySelector(".add");

// Select .todo container
const todoContainer = document.querySelector('.todos');

// Select search input
const searchInput = document.querySelector('.search input')

// Generate a list element template
const createListTemplate = todoItem => {
    const template =
        `<li class="text-light list-group-item d-flex justify-content-between align-items-center">
            <span>${todoItem}</span>
            <i class="fas fa-trash delete"></i>
        </li>`;

    // Select todos class and append template to innerHTML
    todoContainer.innerHTML += template;
}

// Adding to do list items
addItem.addEventListener('submit', event => {

    // Prevent page reload upon submit
    event.preventDefault();

    // Retrieve value in input field
    // Trim whitespace from beginning and end of text input
    const newTodoItem = addItem.add.value.trim();

    // Check if input string is empty
    if (newTodoItem != '') {
        createListTemplate(newTodoItem);

        // reset form after string is added 
        addItem.reset();
    }
})

// Delete to do list items
todoContainer.addEventListener('click', event => {

    // Retrieve HTML for item clicked
    const elementHTML = event.target;

    // Checks if item clicked is a trash can by checking for delete class
    if (elementHTML.classList.contains('delete')) {

        // Removes parent element of trash can element (todo list item)
        elementHTML.parentElement.remove();
    }
})

// Prevent page reload for search form
document.querySelector('.search').addEventListener('submit', event => {

    // Prevent page reload upon submit
    event.preventDefault();
})