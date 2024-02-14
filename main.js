var taskCount = 0;
var taskMark = 0;

// chamar função
function adicionar() {
    var input = document.querySelector('.label');
    var texto = input.value;

    // verificar se tem texto e tirar espaços de antes e depois dele
    if (texto.trim() === '') {
        alert('Coloque um texto 👍');
        return;
    }

    var checkBtn = document.createElement('label');
    checkBtn.className = 'container';
    checkBtn.innerHTML = '<input type="checkbox">';
    checkBtn.onclick = function () {
        lineThrough(newTask);
    };

    // criar item
    var newTask = document.createElement('li');
    newTask.className = 'frase';
    newTask.appendChild(checkBtn); // adicionar botão de concluído
    newTask.innerHTML += `<p>${texto}</p>`;

    // criar botão de delete
    var deleteBtn = document.createElement('span');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = '<img src="Layer 2.svg" alt="trash">';
    deleteBtn.onclick = function () {
        deleteTask(newTask);
        checkTaskList();
    };

    // adicionar botão de deletar
    newTask.appendChild(deleteBtn);

    // adicionar tarefa a lista
    var taskList = document.querySelector('.tarefas');
    taskList.appendChild(newTask);

    // adicionar no counter1
    taskCount++;

    var taskCounter = document.querySelector('.counter1');
    taskCounter.textContent = taskCount;

    // ocultar mensagens
    var vazio = document.querySelectorAll('.icone, .não, .crie');
    vazio.forEach(function (vazio) {
        vazio.style.display = 'none';
    });
    document.querySelector('.info').style.borderBottom = 'none';

    // limpar label
    input.value = '';

    // apagar a task
    function deleteTask(task) {
        var taskList = document.querySelector('.tarefas');
        taskList.removeChild(task);

        taskCount--;
        var taskCounter = document.querySelector('.counter1');
        taskCounter.textContent = taskCount;
    }

    // verificar se há tarefas na lista
    function checkTaskList() {
        var taskList = document.querySelector('.tarefas');
        var vazio = document.querySelectorAll('.icone, .não, .crie');
        var info = document.querySelectorAll('.info');

        if (taskList.children.length === 0) {
            info.forEach(function (info) {
                info.style.borderBottom = 'solid 1px #333';
            });
            vazio.forEach(function (vazio) {
                vazio.style.display = 'flex';
            });
        } else {
            info.forEach(function (info) {
                info.style.borderBottom = 'none';
            });
            vazio.forEach(function (vazio) {
                vazio.style.display = 'none';
            });
        }
    }

    // fazer o traçado quando clicar nele
    function lineThrough(task) {
        taskMark++;
    
        var taskComplete = document.querySelector('.counter2');
        taskComplete.textContent = taskMark;
    
        var texto = task.querySelector('p');
    
        if (texto.style.textDecoration === 'line-through') {
            texto.style.textDecoration = 'none';
            texto.style.color = '#EDWQ';
        } else {
            texto.style.textDecoration = 'line-through';
            texto.style.color = '#808080';
        }
    }
    
    var circleCheck = document.querySelector('.checkmark');
    if (circleCheck) {
        circleCheck.addEventListener('click', function () {
            lineThrough(newTask);
        });
    }
}
