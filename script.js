const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

//* se o valor for maior que zero, vai retornar "true", senao "false" 
//* o trim serve para dizer que se o usuario colocar mts espacos sem nd vai dar ruim tb

const tasksContainer = document.querySelector('.tasks-container');

const validateInput = () => inputElement.value.trim().length > 0;

const handLeAddTask = () => { 

    //* checar se o input eh valido, se nao for vai acontecer oq ta na class error no css

    const inputIsValid = validateInput();

    if (!inputIsValid) { 

        return inputElement.classList.add("error");


    }
 
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');

    taskContent.innerText = inputElement.value;

    const deleteItem = document.createElement('i');
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-trash-can");

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer); 




};

const handLeInputChange = () => { 

    const inputIsValid = validateInput();

    if (inputIsValid) { 

        return inputElement.classList.remove("error");
    }
}



addTaskButton.addEventListener("click", () => handLeAddTask());

inputElement.addEventListener("change", () => handLeInputChange());