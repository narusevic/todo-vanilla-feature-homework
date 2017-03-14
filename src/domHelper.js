export function createItemElement(task, idx, actionFn, toggleCompletion) {
    const todoItem = document.createElement('li');
    todoItem.className = "list-group-item";

    const titleSpan = document.createElement('span');
    titleSpan.innerHTML = task.title;

    const selectElement = document.createElement('input');
    selectElement.setAttribute('type', 'checkbox');

    const deleteControlElement = document.createElement('span');
    deleteControlElement.className= "glyphicon glyphicon-remove"
    deleteControlElement.addEventListener('click', (e) => {
        actionFn(idx);
    });

    const toggleElement = document.createElement('input');
    toggleElement.setAttribute('type', 'checkbox');
    toggleElement.addEventListener('click', (e) => {
        toggleCompletion(idx);
        toggleColor(idx);
    });

    todoItem.appendChild(selectElement);
    todoItem.appendChild(titleSpan);
    todoItem.appendChild(toggleElement);
    todoItem.appendChild(deleteControlElement);


    return todoItem;
}

export function registerFormListener(actionFn) {
    const taskForm = document.querySelector(".js-add-task-form");
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskInput = document.querySelector(".js-add-task-input");
        actionFn(taskInput);
    });
}

export function getTaskList() {
    return document.querySelector(".js-add-task-list");
}

//mine functions

export function getTodoApp() {
    return document.querySelector(".todo-app");
}

export function createDeleteButton(deleteChecked) {
    const deleteButton = document.createElement('input');
    deleteButton.setAttribute('type', 'submit');
    deleteButton.setAttribute('value', 'Delete');
    deleteButton.className = "delete-button";
    deleteButton.addEventListener('click', (e) => {
        deleteChecked();
    });

    return deleteButton;
}

export function createDeleteCompletedButton(deleteCompleted) {
    const deleteButton = document.createElement('input');
    deleteButton.setAttribute('type', 'submit');
    deleteButton.setAttribute('value', 'Delete Completed');
    deleteButton.className = "delete-completed";
    deleteButton.addEventListener('click', (e) => {
        deleteCompleted();
    });

    return deleteButton;
}

export function toggleColor(idx) {
    const task = document.querySelector(".js-add-task-list").children[idx];

    if (task.children[2].checked) {
        task.className = "list-group-item task-completed";
    }
    else {
        task.className = "list-group-item";
    }
}

export function getCheckedIds() {
    const taskList = document.querySelector(".js-add-task-list");
    let ids = [];

    for (let i = taskList.children.length - 1; i >= 0; i--)
    {
        console.log(taskList.children[i]);

        if (taskList.children[i].children[0].checked)
        {
            ids.push(i);
        }
    }

    return ids;
}