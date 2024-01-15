var taskCount = 0;

function adicionar(){
    var inputElement = document.querySelector('.label');
    var texto = inputElement.value;

    if (texto.trim() === ''){
        alert('Adiciona uma tarefa chefia!');
        return;
    }

    taskCount++;

   var taskCounter = document.querySelector('.counter1');
   taskCounter.textContent = taskCount;

   var circleCheck = document.createElement('button');
   circleCheck.classList = 'check'
   circleCheck.innerHTML = '<img src="round.svg">'

   var newText = document.createElement('p')
   newText.textContent = texto
  
   var newTask = document.createElement('li');
   newTask.appendChild(circleCheck);
   newTask.appendChild(newText);
   

   var deleteBtn = document.createElement('span');
   deleteBtn.className = 'deletar'
   deleteBtn.innerHTML = '<img src="Layer 2.svg" alt="trash">'
   deleteBtn.onclick = function(){
    deleteTask(newTask);
   }

   

   newTask.appendChild(deleteBtn);

   var taskList = document.querySelector('.task');
   taskList.appendChild(newTask);

   var não = document.querySelector('.não');
   não.style.display = 'none';

   var crie = document.querySelector('.crie');
   crie.style.display = 'none';

   var icone = document.querySelector('.icone');
   icone.style.display = 'none';

   var info = document.querySelector('.info');
   info.style.borderBottom = 'none';
   
   inputElement.value = '';
}
   function deleteTask(task){
    var taskList = document.querySelector('.task')
    taskList.removeChild(task);

    taskCount--;
    var taskCounter = document.querySelector('.counter1');
    taskCounter.textContent = taskCount;

    var noMessageBox = document.querySelectorAll('.não', '.crie', '.icone')
    while(taskList.childNodes === 0){
        noMessageBox.style.display = 'flex'
    }

   }
