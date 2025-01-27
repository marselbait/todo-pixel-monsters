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

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    li.addEventListener('click', function () {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            generateMonster();
        }
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Generate Pixel Monster
function generateMonster() {
    const monsterContainer = document.getElementById('monsterContainer');
    const monster = document.createElement('div');
    monster.classList.add('monster');

    for (let i = 0; i < 25; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = Math.random() > 0.5 ? '#000' : '#FFF';
        monster.appendChild(pixel);
    }

    monsterContainer.appendChild(monster);
}
