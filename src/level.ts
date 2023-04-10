import { CardListData } from './cardList';
import { renderWinScreenBlock } from './winScreen';
import { renderLuserScreenBlock } from './luserScreen';
import { renderStartBlock } from './index';

export function renderLevel1Block() {
  const gameSection = document.createElement('section');
  gameSection.classList.add('gamesection');
  APP_CONTAINER.appendChild(gameSection);

  const header = document.createElement('div');
  header.classList.add('header');
  gameSection.appendChild(header);

  const gameField = document.createElement('div');
  gameField.classList.add('gamefield');
  gameSection.appendChild(gameField);

  interface Card {
    id: number;
    elem: string;
    src: string;
    cardShirt: string;
  }
  const array: Array<Card> = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * CardListData.length);
    array.push(CardListData[random]);
  }
  const arrayNew: Array<Card> = array.concat(array);

  function shuffle(arrayNew: Array<Card>) {
    for (let i = arrayNew.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayNew[i], arrayNew[j]] = [arrayNew[j], arrayNew[i]];
    }
  }
  shuffle(arrayNew);

  arrayNew.forEach((card) => {
    const cardElem = document.createElement(card.elem);
    cardElem.setAttribute('src', card.src);

    cardElem.setAttribute('data-framework', card.src);

    gameField.appendChild(cardElem);

    function coupCard() {
      cardElem.setAttribute('src', card.cardShirt);
    }
    setTimeout(coupCard, 5000);
    cardElem.addEventListener('click', function () {
      cardElem.setAttribute('src', card.src);
      cardElem.addEventListener('click', flipCard);
    });
  });

  let moves = 0;
  let firstCard: HTMLElement | null;
  let secondCard: HTMLElement | null;

  // eslint-disable-next-line no-inner-declarations
  function flipCard(this: HTMLElement | null) {
    if (!firstCard) {
      firstCard = this;
      return;
    }
    secondCard = this;
    checkWin();
  }

  function checkWin() {
    // Смотрим, какие у них data атрибуты
    console.log('check first card: ', firstCard?.dataset.framework);
    console.log('check second card: ', secondCard?.dataset.framework);
    let winResult = false;
    if (firstCard?.dataset.framework === secondCard?.dataset.framework) {
      winResult = true;
      moves++;
      secondCard = null;
      firstCard = null;
    }
    console.log('🚀 ~ file: level.js:58 ~ checkWin ~ winResult:', winResult);
    console.log(moves);
    if ((winResult = true && moves === 3)) {
      clearInterval(timer);

      window.application.time.sec = secs;

      window.application.time.min = mins;

      window.application.renderLevel('win');
    } else if (firstCard?.dataset.framework !== secondCard?.dataset.framework) {
      clearInterval(timer);

      window.application.time.sec = secs;

      window.application.time.min = mins;

      window.application.renderLevel('luser');
    }
  }

  window.application.levels['win'] = renderWinScreenBlock;

  window.application.levels['luser'] = renderLuserScreenBlock;

  window.application.levels['level1'] = renderLevel1Block;

  const buttonRestart = document.createElement('button');
  buttonRestart.textContent = 'Начать заново!';
  buttonRestart.classList.add('buttonrestart');
  header.appendChild(buttonRestart);

  buttonRestart.addEventListener('click', () => {
    window.application.renderLevel('start');
  });

  window.application.levels['start'] = renderStartBlock;

  const TopTimer = document.createElement('div');
  TopTimer.classList.add('timer');
  header.appendChild(TopTimer);

  let now = 0;
  let timer: ReturnType<typeof setInterval>;
  let mins = 0;
  let secs: string | number = 0;

  const cardFieldTimer = document.createElement('span');
  TopTimer.appendChild(cardFieldTimer);

  function time() {
    secs = Math.floor((Date.now() - now) / 1000);
    if (secs === 60) {
      now = Date.now();
      mins++;
    }
    if (secs < 10) {
      secs = '0' + secs;
    }
    cardFieldTimer.textContent = mins + ':' + secs;
    cardFieldTimer.classList.add('timer-number');
  }
  startTimer();
  console.log(cardFieldTimer);

  function startTimer() {
    now = Date.now();
    mins = 0;
    timer = setInterval(time);
  }
}
import { APP_CONTAINER } from './index';

window.application = {
  levels: {},
  renderLevel: function (levelNumber) {
    window.application.levels[levelNumber];
    // очищаем контейнер перед отрисовкой экрана
    APP_CONTAINER.innerHTML = '';

    window.application.levels[levelNumber]();
  },
  time: {
    sec: 0,
    min: 0,
  },
};
