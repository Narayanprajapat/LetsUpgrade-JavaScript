// Define UI vars
const form = document.querySelector('#task-form');
const toDoList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const toDoInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
	// DOM load event
	document.addEventListener('DOMContentLoaded', getToDo);
	// Add task event
	form.addEventListener('submit', addToDo);
	// Remove task event
	toDoList.addEventListener('click', removeToDo);
	// Clear task event
	clearBtn.addEventListener('click', clearToDo);
}

// Get tasks from LS
function getToDo() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function (task) {
		// Create li element
		const li = document.createElement('li');
		// Add a class
		li.className = 'collection-item';
		// Create text node and append to li
		li.appendChild(document.createTextNode(task));
		// Create new link element
		const link = document.createElement('a');
		// Add class
		link.className = 'delete-item secondary-content';
		// Add icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';
		// Append the link to li
		li.appendChild(link);
		// Append li to ul
		toDoList.appendChild(li);
	});
}

// Add task
function addToDo(e) {
	if (toDoInput.value === '') {
		alert('Add a Task!!');
		return;
	}
	// Create li element
	const li = document.createElement('li');
	// Add a class
	li.className = 'collection-item';
	// Create text node and append to li
	li.appendChild(document.createTextNode(toDoInput.value));
	// Create new link element
	const link = document.createElement('a');
	// Add class
	link.className = 'delete-item secondary-content';
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';
	// Append the link to li
	li.appendChild(link);
	// Append li to ul
	toDoList.appendChild(li);
	// Store in LS
	storeTaskInLocalStorage(toDoInput.value);
	// Clear input
	toDoInput.value = '';
	e.preventDefault();
}

// Store task in LS
function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeToDo(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are You Sure Remove?'))
			console.log(e.target.parentElement.parentElement.remove());
	}
	e.preventDefault();

	removeTaskFromLocalStorage(e.target.parentElement.parentElement);
}

// Remove Task From Local Storage
function removeTaskFromLocalStorage(taskItem) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach((task, index) => {
		if (taskItem.textContent === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear task
function clearToDo() {
	while (toDoList.firstChild) {
		toDoList.removeChild(toDoList.firstChild);
	}
	clearTaskFromLocalStorage();
}

// Clear Task From Local Storage
function clearTaskFromLocalStorage() {
	if (confirm('Are You Sure Clear To-Do')) {
		localStorage.clear();
	}
}
