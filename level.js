function renderLevel1Block(container) {
    const level1 = document.createElement('div');
    level1.classList.add('level');
    APP_CONTAINER.appendChild(level1);
    
    const subtitle1 = document.createElement('h2');
    subtitle1.textContent = 'Вы выбрали первый уровень!';
    subtitle1.classList.add('subtitle');
  
    container.appendChild(subtitle1);
}

function renderLevel2Block(container) {
    const level2 = document.createElement('div');
    level2.classList.add('level');
    APP_CONTAINER.appendChild(level2);
    
    const subtitle2 = document.createElement('h2');
    subtitle2.textContent = 'Вы выбрали второй уровень!';
    subtitle2.classList.add('subtitle');
  
    container.appendChild(subtitle2);
}

function renderLevel3Block(container) {
    const level3 = document.createElement('div');
    level3.classList.add('level');
    APP_CONTAINER.appendChild(level3);
    
    const subtitle3 = document.createElement('h2');
    subtitle3.textContent = 'Вы выбрали третий уровень!';
    subtitle3.classList.add('subtitle');
  
    container.appendChild(subtitle3);
}

window.application = {
    levels: {},
    renderLevel: function (screenLevel) {
        if (window.application.levels[levelNumber]) {
            // очищаем контейнер перед отрисовкой экрана
            APP_CONTAINER.innerHTML = '';
            window.application.levels[levelNumber]();
        } else {
            console.warn(`Уровня "${levelNumber}" не существует!`);
        }
    }
}

button1.addEventListener('click', () => {
    renderLevel('level1');
});
window.application.levels['level1'] = renderLevel1Block;


button2.addEventListener('click', () => {
    renderLevel('level1');
});
window.application.levels['level1'] = renderLevel2Block;


button3.addEventListener('click', () => {
    renderLevel('level3');
});
window.application.levels['level3'] = renderLevel3Block;

