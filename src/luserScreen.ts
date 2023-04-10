import { APP_CONTAINER } from './index';
import { renderStartBlock } from './index';
// import { renderLevel1Block } from './level';

export function renderLuserScreenBlock() {
  const div = document.createElement('div');
  div.classList.add('complexity');
  APP_CONTAINER.appendChild(div);

  const topDiv = document.createElement('div');
  topDiv.classList.add('topdiv');
  div.appendChild(topDiv);

  const pictur = document.createElement('img');
  pictur.setAttribute('src', './static/luser.png');
  pictur.classList.add('picturwin');
  topDiv.appendChild(pictur);

  const h1 = document.createElement('h1');
  h1.textContent = 'Вы проиграли!';
  h1.classList.add('titlewin');
  topDiv.appendChild(h1);

  const elapsedtime = document.createElement('h2');
  elapsedtime.textContent = 'Затраченное время:';
  elapsedtime.classList.add('titletime');
  topDiv.appendChild(elapsedtime);

  const secs = window.application.time.sec;

  const mins = window.application.time.min;

  const realtime = document.createElement('div');
  realtime.classList.add('realtime');
  realtime.textContent = mins + '.' + secs;
  topDiv.appendChild(realtime);

  console.log(window.application.time.sec);

  console.log(window.application.time.min);

  const buttonRestart = document.createElement('button');
  buttonRestart.textContent = 'Играть снова!';
  buttonRestart.classList.add('buttonrestart');
  topDiv.appendChild(buttonRestart);

  buttonRestart.addEventListener('click', () => {
    window.application.renderLevel('start');
  });

  window.application.levels['start'] = renderStartBlock;
}
