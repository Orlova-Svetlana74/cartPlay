const APP_CONTAINER = document.querySelector('.app');


const div = document.createElement('div');
div.classList.add('complexity');
APP_CONTAINER.appendChild(div);



const h1 = document.createElement('h1');
h1.textContent = 'Выбери сложность!';
h1.classList.add('title');
div.appendChild(h1);

const divStart = document.createElement('div');
divStart.classList.add('divstart');
div.appendChild(divStart);


const button1 = document.createElement('button');
button1.classList.add('button');
button1.textContent = '1';
divStart.appendChild(button1);


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
