// Defining UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Function to load all event listners
loadEventListners();

// Create the function
function loadEventListners(){
    // Add task events
    form.addEventListener('submit', addTask);
}

// Create add task function that take an event lestner (e)
function addTask(e){
    // check if the value existe
    if (taskInput.value === '') {
        alert('Please add a Task !');
    }

    // Create list items (li) element
    const li = document.createElement('li');

    // Add the class
    li.className = 'collection-item';

    // Cretae the text Node and append it to the li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');

    // Add the class
    link.className = 'delete-item secondary-content'; //Secondary content to have somthing on the right of the li (materializecss)

    // Add Icon HTML
    link.innerHTML = '<i class="fa fa-remove"></li>';

    // Append the link to the li
    li.appendChild(link);

    // Append li to the ul
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = '';

    e.preventDefault();
}