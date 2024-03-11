let taskCount = 0;
let taskComplete = 0;
const botaoCriar = document.getElementById('btnAdd');
const taskList = document.getElementById('tarefas');
const taskCounter = document.querySelector('.counter1');
const taskCounterElement = document.querySelector('.counter2');
const mensagemVazio = document.getElementById('vazio');

botaoCriar.addEventListener('click', () => {
    const newTask = document.getElementById('label').value;

    if (newTask.trim() === '') {
        // Não adiciona tarefa vazia
        return;
    }

    const taskId = 'task_' + taskCount; // Identificador único para cada tarefa

    const texto = document.createElement("li");
    texto.id = taskId;
    texto.textContent = newTask;
    taskCount++;
    
    const checkBtn = document.createElement('input');
    checkBtn.type = 'checkbox';
    checkBtn.addEventListener("change", () => {
        texto.classList.toggle("lineThrough", checkBtn.checked);

        if (checkBtn.checked) {
            taskComplete++;
        } else {
            taskComplete--;
        }

        taskCounterElement.textContent = taskComplete;
        atualizarVisibilidadeMensagem();
    });

    const checkLabel = document.createElement('label');
    checkLabel.className = 'container';
    checkLabel.appendChild(checkBtn);

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = '<img src="Layer 2.svg" alt="trash">';
    deleteBtn.addEventListener('click', () => {
        const taskElement = document.getElementById(taskId);
        taskElement.remove();
        taskCount--;

        if (checkBtn.checked) {
            taskComplete--;
        }

        taskCounter.textContent = taskCount;
        taskCounterElement.textContent = taskComplete;

        // Verifica se não há mais tarefas e mostra a mensagem padrão se necessário
        atualizarVisibilidadeMensagem();
    });

    texto.appendChild(deleteBtn);
    texto.appendChild(checkLabel);

    document.getElementById('label').value = '';
    taskList.appendChild(texto);
    taskCounter.textContent = taskCount;

    // Oculta a mensagem padrão se houver tarefas
    atualizarVisibilidadeMensagem();
});

// Evento de "Enter" para adicionar uma tarefa
document.getElementById('label').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        botaoCriar.click(); // Dispara o evento de clique do botão
    }
});

// Função para atualizar a visibilidade da mensagem padrão
function atualizarVisibilidadeMensagem() {
    mensagemVazio.style.display = taskList.children.length === 0 ? 'block' : 'none';
}
