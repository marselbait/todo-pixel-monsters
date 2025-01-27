function generateMonster() {
    const monsterContainer = document.getElementById('monsterContainer');
    const monster = document.createElement('div');
    monster.classList.add('monster');

    const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1']; // Add more colors if needed
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 25; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = Math.random() > 0.5 ? randomColor : '#FFF';
        monster.appendChild(pixel);
    }

    monsterContainer.appendChild(monster);
}
