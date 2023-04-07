import { CardListData } from './cardList';
import { APP_CONTAINER } from './index';
import { renderWinScreenBlock } from './winScreen';
import { renderLuserScreenBlock } from './luserScreen';
import {renderStartBlock} from './index';

export function renderLevel3Block() {
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
  for (let i = 0; i < 9; i++) {
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

  let moves = 0;
  let firstCard: HTMLElement | null;
  let secondCard: HTMLElement | null;

  function flipCard(this: HTMLElement | null) {
    if (!firstCard) {
      firstCard = this;
      return;
    }
    secondCard = this;
    checkWin();
  } 
  function checkWin() {
    
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
    if ((winResult = true && moves === 9)) {
      clearInterval(timer);
      // @ts-ignore
      window.application.time.sec = secs;
      // @ts-ignore
      window.application.time.min = mins;
      // @ts-ignore
      window.application.renderLevel('win');
      
    } else if (firstCard?.dataset.framework != secondCard?.dataset.framework) {
      clearInterval(timer);
      // @ts-ignore
      window.application.time.sec = secs;
      // @ts-ignore
      window.application.time.min = mins;
      // @ts-ignore
      window.application.renderLevel('luser');      
    }
  }
   // @ts-ignore
   window.application.levels['win'] = renderWinScreenBlock;
   // @ts-ignore
   window.application.levels['luser'] = renderLuserScreenBlock;
 
  arrayNew.forEach((card) => {
    const cardElem = document.createElement(card.elem);
    cardElem.setAttribute('src', card.src);
    
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

  buttonRestart.addEventListener('click', () => {
    // @ts-ignore
    window.application.renderLevel('start');
  });
  // @ts-ignore
  window.application.levels['start'] = renderStartBlock;

  const TopTimer = document.createElement('div');
  TopTimer.classList.add('timer');
  header.appendChild(TopTimer);

  let now = 0;
  let timer: any = 0;
  let mins = 0;
  let secs: string | number = 0;
  
  const cardFieldTimer: any = document.createElement('span');
  TopTimer.appendChild(cardFieldTimer);

  function time() {    
    secs = Math.floor((Date.now() - now) / 1000);
    if (secs == 60) {
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
  
  function startTimer() {
    now = Date.now();
    mins = 0;
    timer = setInterval(time);
  }  
}
