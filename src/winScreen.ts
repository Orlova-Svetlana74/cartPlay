import { APP_CONTAINER } from './index';
import {renderStartBlock} from './index';
// import {renderLevel1Block} from './level';

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
  elapsedtime.classList.add('titletime');
  topDiv.appendChild(elapsedtime);
  
  // @ts-ignore
  let secs = window.application.time.sec;
  // @ts-ignore
  let mins = window.application.time.min;

  const realtime = document.createElement('div');
  realtime.classList.add('realtime');   
  realtime.textContent = mins + '.' + secs;
  topDiv.appendChild(realtime);

   // @ts-ignore
   console.log (window.application.time.sec)
   // @ts-ignore
   console.log (window.application.time.min)
    
  
  const buttonRestart = document.createElement('button');
  buttonRestart.textContent = 'Играть снова!';
  buttonRestart.classList.add('buttonrestart');
  topDiv.appendChild(buttonRestart);

  buttonRestart.addEventListener('click', () => {
    // @ts-ignore
    window.application.renderLevel('start');
  });
  // @ts-ignore
  window.application.levels['start'] = renderStartBlock;

}
