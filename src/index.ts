import './cardList';
import './styles.css';
import { renderLevel1Block } from './level';
import { renderLevel2Block } from './level_average';
import { renderLevel3Block } from './level_difficult';

export const APP_CONTAINER = document.querySelector('.app') as HTMLElement;

export function renderStartBlock() {
  const div = document.createElement('div');
  div.classList.add('complexity');
  APP_CONTAINER.appendChild(div);

  const topDiv = document.createElement('div');
  topDiv.classList.add('topdiv');
  div.appendChild(topDiv);

  const h1 = document.createElement('h1');
  h1.textContent = 'Выбери сложность!';
  h1.classList.add('title');
  topDiv.appendChild(h1);

  const divStart = document.createElement('div');
  divStart.classList.add('divstart');
  div.appendChild(divStart);

  const label1 = document.createElement('label');
  label1.classList.add('label');
  label1.textContent = '1';
  divStart.appendChild(label1);

  const label2 = document.createElement('label');
  label2.classList.add('label');
  label2.textContent = '2';
  divStart.appendChild(label2);

  const label3 = document.createElement('label');
  label3.classList.add('label');
  label3.textContent = '3';
  divStart.appendChild(label3);

  const button1 = document.createElement('input');
  button1.classList.add('lang-radio');
  button1.setAttribute('type', 'radio');
  button1.setAttribute('name', 'choicelevel');
  button1.value = 'simple';
  button1.textContent = '1';
  label1.appendChild(button1);

  label1.addEventListener('click', function () {
    this.classList.add('label-active');
  });

  label2.addEventListener('click', function () {
    this.classList.add('label-active');
  });

  label3.addEventListener('click', function () {
    this.classList.add('label-active');
  });

  const button2 = document.createElement('input');
  button2.classList.add('lang-radio');
  button2.setAttribute('type', 'radio');
  button2.setAttribute('name', 'choicelevel');
  button2.value = 'average';
  button2.textContent = '2';
  label2.appendChild(button2);

  const button3 = document.createElement('input');
  button3.classList.add('lang-radio');
  button3.setAttribute('type', 'radio');
  button3.setAttribute('name', 'choicelevel');
  button3.value = 'difficult';
  button3.textContent = '3';
  label3.appendChild(button3);

  // const ButtonListData = [
  //   {
  //     id: '1-simple',
  //     elem: 'input',
  //     class: 'lang-radio',
  //     name: 'choicelevel',
  //     type: 'radio',
  //     value: 'simple',
  //   },
  //   {
  //     id: '2-average',
  //     elem: 'input',
  //     class: 'lang-radio',
  //     name: 'choicelevel',
  //     type: 'radio',
  //     value: 'average',
  //   },
  //   {
  //     id: '3-difficult',
  //     elem: 'input',
  //     class: 'lang-radio',
  //     name: 'choicelevel',
  //     type: 'radio',
  //     value: 'difficult',
  //   },
  // ];
  // ButtonListData.forEach((level) => {
  //   const buttonElem = document.createElement(level.elem) as HTMLInputElement;
  //   buttonElem.classList.add(level.class);
  //   buttonElem.value = level.value;
  //   buttonElem.type = level.type;
  //   buttonElem.setAttribute('name', level.name);
  //   divStart.appendChild(buttonElem);
  //
  // });

  const buttonStart = document.createElement('button');
  buttonStart.classList.add('buttonstart');
  buttonStart.textContent = 'Старт';
  div.appendChild(buttonStart);

  buttonStart.addEventListener('click', () => {
    // @ts-ignore
    document.querySelectorAll('.lang-radio').forEach((langRadio) => {
      // @ts-ignore
      if (langRadio.checked) {
        // @ts-ignore
        let chactValue: string = langRadio.value;
        switch (chactValue) {
          case 'simple':
            // @ts-ignore
            window.application.renderLevel('level1');
            break;

          case 'average':
            // @ts-ignore
            window.application.renderLevel('level2');
            break;

          case 'difficult':
            // @ts-ignore
            window.application.renderLevel('level3');
            break;
        }
      }
    });
  });
  // @ts-ignore
  window.application.levels['level1'] = renderLevel1Block;
  // @ts-ignore
  window.application.levels['level2'] = renderLevel2Block;
  // @ts-ignore
  window.application.levels['level3'] = renderLevel3Block;
}
renderStartBlock()
