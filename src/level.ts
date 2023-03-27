import { CardListData } from './cardList';
import { renderWinScreenBlock } from './winScreen';
import { button1 } from './index';
// import { startTimer } from "./timer";

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
      let j = Math.floor(Math.random() * (i + 1));
      [arrayNew[i], arrayNew[j]] = [arrayNew[j], arrayNew[i]];
    }
  }

  shuffle(arrayNew);
  // @ts-ignore

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
  // Вызываем функцию проверки карты
  function checkWin() {
    // Смотрим, какие у них data атрибуты
    console.log('check first card: ', firstCard?.dataset.framework);
    console.log('check second card: ', secondCard?.dataset.framework);
    let winResult = false;
    if (firstCard?.dataset.framework === secondCard?.dataset.framework) {
      winResult = true;
      // Увеличиваем значение угаданных пар
      moves++;
      // очищаем информация о перевернутых картах
      secondCard = null;
      firstCard = null;
    }
    console.log('🚀 ~ file: level.js:58 ~ checkWin ~ winResult:', winResult);
    console.log(moves);
    if ((winResult = true && moves === 3)) {
      // @ts-ignore
      window.application.renderLevel('win');
      // @ts-ignore
    } else if (firstCard?.dataset.framework != secondCard?.dataset.framework) {
      alert('Вы проиграли');
    }
  }
  // @ts-ignore
  window.application.levels['win'] = renderWinScreenBlock;
  // @ts-ignore
  window.application.levels['level1'] = renderLevel1Block;
  arrayNew.forEach((card) => {
    const cardElem = document.createElement(card.elem);
    cardElem.setAttribute('src', card.src);
    // Задаем data атрибут, значение равно пути до картинки
    cardElem.setAttribute('data-framework', card.src);

    gameField.appendChild(cardElem);
    function coupCard() {
      cardElem.setAttribute('src', card.cardShirt);
    }
    setTimeout(coupCard, 5000);
    cardElem.addEventListener('click', flipCard);
    cardElem.addEventListener('click', function () {
      cardElem.setAttribute('src', card.src);
    });
  });

  const buttonRestart = document.createElement('button');
  buttonRestart.textContent = 'Начать заново!';
  buttonRestart.classList.add('buttonrestart');
  header.appendChild(buttonRestart);

  const TopTimer = document.createElement('div');
  TopTimer.classList.add('timer');
  header.appendChild(TopTimer);

  // const timerMinSec = document.createElement('div');
  // timerMinSec.classList.add('timer-minsec');
  // TopTimer.appendChild(timerMinSec);

  // const timMin = document.createElement('P');
  // timMin.textContent = 'min';
  // timMin.classList.add('min-sec');
  // timerMinSec.appendChild(timMin);

  // const timSec = document.createElement('P');
  // timSec.textContent = 'sec';
  // timSec.classList.add('min-sec');
  // timerMinSec.appendChild(timSec);

  let now = 0;
  let timer: any = 0;
  let mins = 0;
  let secs: string | number = 0;
  function time() {
    secs = Math.floor((Date.now() - now) / 1000);
    if (secs == 60) {
      now = Date.now();
      mins++;
    }
    if (secs < 10) {
      secs = '0' + secs;
    } 
  
  const cardFieldTimer: any = document.createElement('span');
  cardFieldTimer.textContent = mins + ':' + secs;
  cardFieldTimer.classList.add('timer-number');
  TopTimer.appendChild(cardFieldTimer);
}
time()
  button1.addEventListener('click', function handleTime () {
    now = Date.now();
  mins = 0;
  clearInterval(timer);
  timer = setInterval(time);    
  });
  
}

import { APP_CONTAINER } from './index';
// @ts-ignore
window.application = {
  levels: {},
  renderLevel: function (levelNumber: any) {
    // @ts-ignore
    window.application.levels[levelNumber];
    // очищаем контейнер перед отрисовкой экрана
    APP_CONTAINER.innerHTML = '';
    // @ts-ignore
    window.application.levels[levelNumber]();
  },
};
