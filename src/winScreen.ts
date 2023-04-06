import { APP_CONTAINER } from './index';
import {renderStartBlock} from './index';

export function renderWinScreenBlock() {
  
  const div = document.createElement('div');
  div.classList.add('complexity');
  APP_CONTAINER.appendChild(div);

  const topDiv = document.createElement('div');
  topDiv.classList.add('topdiv');
  div.appendChild(topDiv);

  const pictur = document.createElement('img');
  pictur.setAttribute('src', './static/win.png');
  pictur.classList.add('picturwin');
  topDiv.appendChild(pictur);

  const h1 = document.createElement('h1');
  h1.textContent = 'Вы выиграли!';
  h1.classList.add('titlewin');
  topDiv.appendChild(h1);

  const elapsedtime = document.createElement('h2');
  elapsedtime.textContent = 'Затраченное время';
  
  // @ts-ignore
  window.application.time.min = mins;
  // @ts-ignore
  window.application.time.sec = secs

  elapsedtime.classList.add('titletime');
  topDiv.appendChild(elapsedtime);

  const tablo = document.createElement('div');
  tablo.classList.add('tablo');
  topDiv.appendChild(tablo);
  
  // @ts-ignore
  // window.application.time.sec = secs;
  // @ts-ignore
  // window.application.time.min = mins;
  // @ts-ignore
  // tablo. textContent = secs
  
  // tablo. textContent = mins
  const buttonRestart = document.createElement('button');
  buttonRestart.textContent = 'Начать заново!';
  buttonRestart.classList.add('buttonrestart');
  topDiv.appendChild(buttonRestart);

  buttonRestart.addEventListener('click', () => {
    // @ts-ignore
    window.application.renderLevel('start');
  });
  // @ts-ignore
  window.application.levels['start'] = renderStartBlock;

}
