// Add Task Functionality
document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            moveToDone(li);
            generateMonster();
        }
    });

    li.appendChild(doneBtn);
    taskList.appendChild(li);
}

function moveToDone(task) {
    const doneList = document.getElementById('doneList');
    task.removeChild(task.querySelector('button')); // Remove the "Done" button
    doneList.appendChild(task);
}

function generateMonster() {
    const monsterContainer = document.getElementById('monsterContainer');
    const monster = document.createElement('div');
    monster.classList.add('monster');

    const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 25; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = Math.random() > 0.5 ? randomColor : '#FFF';
        monster.appendChild(pixel);
    }

    monsterContainer.appendChild(monster);
}
