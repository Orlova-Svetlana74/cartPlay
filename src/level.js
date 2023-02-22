function renderLevel1Block() {
  // const level1 = document.createElement('div');
  // level1.classList.add('level');
  // APP_CONTAINER.appendChild(level1);

  const gameSection = document.createElement('section');
  gameSection.classList.add('gamesection');
  APP_CONTAINER.appendChild(gameSection);

  const header = document.createElement('div');
  header.classList.add('header');
  gameSection.appendChild(header);

  const gameField = document.createElement('div');
  gameField.classList.add('gamefield');
  gameSection.appendChild(gameField);

  const CardListData = [
    {
      id: 1,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 2,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 3,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 4,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 5,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 6,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 7,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 8,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 9,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 10,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 11,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 12,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 13,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 14,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 15,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 16,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 17,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 18,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 19,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 20,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 21,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 22,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 23,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 24,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 25,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 26,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 27,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 28,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 29,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 30,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 31,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 32,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 33,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 34,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 35,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
    {
      id: 36,
      elem: 'img',
      src: './img/shirt.png',
      class: 'img_cart',
    },
  ];

  CardListData.forEach((card) => {
    const cardElem = document.createElement(card.elem);
    cardElem.setAttribute('src', card.src);
    cardElem.classList.add(card.class);
    gameField.appendChild(cardElem);
  });

  const buttonRestart = document.createElement('button');
  buttonRestart.textContent = 'Начать заново!';
  buttonRestart.classList.add('buttonrestart');
  header.appendChild(buttonRestart);

  const TopTimer = document.createElement('div');
  TopTimer.classList.add('timer');
  header.appendChild(TopTimer);

  const timerMinSec = document.createElement('div');
  timerMinSec.classList.add('timer-minsec');
  TopTimer.appendChild(timerMinSec);

  const timMin = document.createElement('P');
  timMin.textContent = 'min';
  timMin.classList.add('min-sec');
  timerMinSec.appendChild(timMin);

  const timSec = document.createElement('P');
  timSec.textContent = 'sec';
  timSec.classList.add('min-sec');
  timerMinSec.appendChild(timSec);

  const TimerNumber = document.createElement('P');
  TimerNumber.textContent = '00.00';
  TimerNumber.classList.add('timer-number');
  TopTimer.appendChild(TimerNumber);
}

function renderLevel2Block() {
  const level2 = document.createElement('div');
  level2.classList.add('level');
  APP_CONTAINER.appendChild(level2);

  const subtitle2 = document.createElement('h2');
  subtitle2.textContent = 'Вы выбрали второй уровень! Экран в разработке!';
  subtitle2.classList.add('subtitle');

  level2.appendChild(subtitle2);
}

function renderLevel3Block() {
  const level3 = document.createElement('div');
  level3.classList.add('level');
  APP_CONTAINER.appendChild(level3);

  const subtitle3 = document.createElement('h2');
  subtitle3.textContent = 'Вы выбрали третий уровень!Экран в разработке!';
  subtitle3.classList.add('subtitle');

  level3.appendChild(subtitle3);
}

window.application = {
  levels: {},
  renderLevel: function (levelNumber) {
    window.application.levels[levelNumber];
    // очищаем контейнер перед отрисовкой экрана
    APP_CONTAINER.innerHTML = '';
    window.application.levels[levelNumber]();
  },
};

buttonStart.addEventListener('click', () => {
  window.application.renderLevel('level1');
});
window.application.levels['level1'] = renderLevel1Block;

// button2.addEventListener('click', () => {
//   window.application.renderLevel('level2');
// });
window.application.levels['level2'] = renderLevel2Block;

// button3.addEventListener('click', () => {
//   window.application.renderLevel('level3');
// });
window.application.levels['level3'] = renderLevel3Block;
