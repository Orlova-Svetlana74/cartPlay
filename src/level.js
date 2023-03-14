function renderLevel1Block() {
  const gameSection = document.createElement('section');
  gameSection.classList.add('gamesection');
  APP_CONTAINER.appendChild(gameSection);

  const header = document.createElement('div');
  header.classList.add('header');
  gameSection.appendChild(header);

  const gameField = document.createElement('div');
  gameField.classList.add('gamefield');
  gameSection.appendChild(gameField);

  const array = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * CardListData.length);
    array.push(CardListData[random]);
  }

  const arrayNew = array.concat(array);
  console.log(arrayNew);

  function shuffle(arrayNew) {
    let currentIndex = arrayNew.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return arrayNew;
  }
  shuffle(arrayNew);
  // Количество отгаданных пар
  let moves = 0;

  let firstCard;
  let secondCard;
  let isCardFlipped = false;

  // eslint-disable-next-line no-inner-declarations
  function flipCard() {
    console.log('flipping card');
    // Если уже была выбрана первая карта повторно, то выходим из функции
    if (firstCard === this) return;
    // Если карта ни разу не была перевернута, то это первая карта
    if (!isCardFlipped) {
      // присваиваем карту
      firstCard = this;
      // Задаем в переменную, что мы перевернули карту
      isCardFlipped = true;
      // выходим из функции
      return;
    }
    // в теле функции код дошел до этой строчки
    // значит не было выхода из функции и карта уже была перевернута (isCardFlipped равен true)
    // присваиваем как вторую карту
    secondCard = this;

    // вызов функции проверки внутри функции flipCard, так как она будет вызываться при клике на карту
    checkWin();
  }

  // Вызываем функцию проверки карты
  function checkWin() {
    // Смотрим, какие у них data атрибуты
    console.log('check first card: ', firstCard.dataset.framework);
    console.log('check second card: ', secondCard.dataset.framework);

    let winResult = false;

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      winResult = true;
      // Увеличиваем значение угаданных пар
      moves++;
    }

    console.log('🚀 ~ file: level.js:58 ~ checkWin ~ winResult:', winResult);

    if (winResult && moves === 3) {
      alert('Вы победили');
    } else {
      alert('Вы проиграли!');
    }

    // Если количество попыток для данного уровня сложност достигнуто
    // показываем надпись Вы выиграли
  }
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

window.application = {
  levels: {},
  renderLevel: function (levelNumber) {
    window.application.levels[levelNumber];
    // очищаем контейнер перед отрисовкой экрана
    APP_CONTAINER.innerHTML = '';
    window.application.levels[levelNumber]();
  },
};
import { divStart } from './index.js';
const button1 = document.createElement('button');
button1.classList.add('button');
button1.textContent = '1';
divStart.appendChild(button1);

button1.addEventListener('click', () => {
  window.application.renderLevel('level1');
});
window.application.levels['level1'] = renderLevel1Block;
