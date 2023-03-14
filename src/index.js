import './level.js';
import './level_average.js';
import './level_difficult.js';
import './cardList.js';
import './styles.css';
const APP_CONTAINER = document.querySelector('.app');

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

export const divStart = document.createElement('div');
divStart.classList.add('divstart');
div.appendChild(divStart);

// const ButtonListData = [
//   {
//     id: 1,
//     elem: 'buttonSimple',
//     class: 'button',
//     name: '1',
//   },
//   {
//     id: 2,
//     elem: 'button_average',
//     class: 'button',
//     name: '2',
//   },
//   {
//     id: 3,
//     elem: 'button_difficult',
//     class: 'button',
//     name: '3',
//   },
// ];
// ButtonListData.forEach((level) => {
//   const buttonElem = document.createElement(level.elem);
//   buttonElem.classList.add(level.class);
//   buttonElem.textContent = level.name;
//   buttonElem.setAttribute('name', level.name);
//   divStart.appendChild(buttonElem);
// });

const button2 = document.createElement('button');
button2.classList.add('button');
button2.textContent = '2';
divStart.appendChild(button2);

const button3 = document.createElement('button');
button3.classList.add('button');
button3.textContent = '3';
divStart.appendChild(button3);

const buttonStart = document.createElement('button');
buttonStart.classList.add('buttonstart');
buttonStart.textContent = 'Старт';
div.appendChild(buttonStart);
