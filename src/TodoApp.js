import { renderHtmlForm, createItemElement, registerFormListener, getTaskList, getTodoApp, createDeleteButton, createDeleteCompletedButton, getCheckedIds } from './domHelper';
import tasks from '../data/tasks';

class TodoApp {
    constructor() {
        this.renderTasks = this.renderTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.deleteCompleted = this.deleteCompleted.bind(this);
        this.deleteChecked = this.deleteChecked.bind(this);

        registerFormListener(this.addTask);
        this.renderTasks();
        this.renderDeleteButtons();
    }

    // Actions
    addTask(taskInput) {
        tasks.push({
            title: taskInput.value,
            completed: false
        });

        taskInput.value = '';
        this.renderTasks();
    }

    deleteTask(idx) {
        tasks.splice(idx, 1);
        this.renderTasks();
    }

    deleteCompleted()
    {
        console.log('a');
        let indexes = [] 

        tasks.forEach((item, idx) =>
        {
            if (item.completed)
            {
                indexes.push(idx);
            }
        });

        for (let i = indexes.length - 1; i >= 0; i--)
        {
            this.deleteTask(indexes[i] );
        }
    }

    deleteChecked()
    {
        const ids = getCheckedIds();
        ids.forEach((id) =>
        {
            this.deleteTask(id)
        });
    }

    toggleCompletion(idx)
    {
        console.log(tasks[idx].completed);
        tasks[idx].completed = !tasks[idx].completed;
    }
    
    // Renderer
    renderTasks() {
        const taskList = getTaskList();
        taskList.innerHTML = '';

        tasks.forEach((item, idx) => {
            taskList.appendChild(createItemElement(item, idx, this.deleteTask, this.toggleCompletion));
        });
    }

    renderDeleteButtons()
    {
        const todoApp = getTodoApp();
        todoApp.appendChild(createDeleteButton(this.deleteChecked));
        todoApp.appendChild(createDeleteCompletedButton(this.deleteCompleted));
    }
}

export default TodoApp;
