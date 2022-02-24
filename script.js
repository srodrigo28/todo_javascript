class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length;
    }
    addTasks(taskText){
        // clona template
        let template = document.querySelector('.task').cloneNode(true);
        template.classList.remove('hide');
        // manipular texto
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;
        // inserir na lista
        let list = document.querySelector('#tasks-container');
        list.appendChild(template);

        // adiciona evento as task
        this.addEvents();

        this.checkTask('add');
    }
    removeTask(task){ 
        let parentEl = task.parentElement;

        parentEl.remove();
        
        this.checkTask('remove');
    }

    completeTask(task){
        task.classList.add('done');
    }
    
    addEvents(){
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];

        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];

        // evento de remover
        removeBtn.addEventListener('click', function(){
            todo.removeTask(this);
        });

        // evento completar tarefa
        doneBtn.addEventListener('click', function(){
            todo.completeTask(this);
        });

    }

    checkTask(command){
        let msg = document.querySelector('#empty-tasks');

        if(command === 'add'){
            this.totalTasks += 1;
        }else if(command == 'remove'){
            this.totalTasks -= 1;
        }

        // checa se tem mais de uma task e adiciona ou remove a classe
        if(this.totalTasks == 1){
            msg.classList.remove('hide');
        }else{
            msg.classList.add('hide');
        }
    }
}

let todo = new Todo();

// events
let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let taskText = document.querySelector('#task');

    if( taskText.value == ''){
        return false
    }
    todo.addTasks(taskText.value);
    taskText.value = '';
    

})