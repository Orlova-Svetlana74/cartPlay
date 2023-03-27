import { APP_CONTAINER } from './index';

export function renderWinScreenBlock() {
  // const gameSection = document.createElement('section');
  // gameSection.classList.add('gamesection');
  // APP_CONTAINER.appendChild(gameSection);

  // const header = document.createElement('div');
  // header.classList.add('header');
  // gameSection.appendChild(header);

  // const gameField = document.createElement('div');
  // gameField.classList.add('gamefield');
  // gameSection.appendChild(gameField);

  const div = document.createElement('div');
  div.classList.add('complexity');
  APP_CONTAINER.appendChild(div);

  const topDiv = document.createElement('div');
  topDiv.classList.add('topdiv');
  div.appendChild(topDiv);

  const pictur = document.createElement('img');
  pictur.setAttribute('src', '/static/win.png');
  pictur.classList.add('picturWin');
  topDiv.appendChild(pictur);

  const h1 = document.createElement('h1');
  h1.textContent = 'Вы выиграли!';
  h1.classList.add('titlewin');
  topDiv.appendChild(h1);

  const elapsedtime = document.createElement('h2');
  elapsedtime.textContent = 'Затраченное время';
  elapsedtime.classList.add('titletime');
  topDiv.appendChild(elapsedtime);

  const buttonRestart = document.createElement('button');
  buttonRestart.textContent = 'Играть снова!';
  buttonRestart.classList.add('buttonrestart');
  topDiv.appendChild(buttonRestart);
}
