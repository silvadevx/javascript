const newTask= document.querySelector('.new-task');
const taskBtn = document.querySelector('.task-btn');
const tasks = document.querySelector('.tasks');

function createLi(){
    const li = document.createElement('li'); //Criando um elemento dentro do html
    return li;
}

newTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        if(!newTask.value) return;
        createTask(newTask.value);
    }
});

function cleanInput(){
    newTask.value = '';
    newTask.focus();
}

function createButtonDelete(li){
    li.innerHTML += ' ';
    const ButtonDelete = document.createElement('button');
    ButtonDelete.innerHTML = 'Apagar';
    ButtonDelete.setAttribute('class', 'apagar-btn');
    li.appendChild(ButtonDelete);
}

function createTask(textInput){
    const li = createLi(); //Adicionando o elemento na página
    li.innerHTML = textInput;
    tasks.appendChild(li)
    cleanInput()
    createButtonDelete(li)
    saveTasks()
}

taskBtn.addEventListener('click', function(){
    if (!newTask.value) return; //checando o valor de forma invertida
    createTask(newTask.value); //Chamando a função dentro do evento para exibir o valoor digitado
});

//Criando uma função para captar o elemento que sera digitada
document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar-btn')) {
        el.parentElement.remove();
        saveTasks();
    }
})

function saveTasks(){
    const liTasks = tasks.querySelectorAll('li');
    const listOfTasks = [];

    for (let task of liTasks){
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        listOfTasks.push(taskText);
    }
    const taskJSON = JSON.stringify(listOfTasks);
    localStorage.setItem('tasks', taskJSON);
}

function addTaskSave(){
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks);

    for(let task of listTasks){
        createTask(task);
    }
}

addTaskSave();