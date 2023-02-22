(() => {
  const t = document.querySelector('.app'),
    e = document.createElement('div');
  e.classList.add('complexity'), t.appendChild(e);
  const n = document.createElement('h1');
  (n.textContent = 'Выбери сложность!'),
    n.classList.add('title'),
    e.appendChild(n);
  const d = document.createElement('div');
  d.classList.add('divstart'), e.appendChild(d);
  const a = document.createElement('button');
  a.classList.add('button'), (a.textContent = '1'), d.appendChild(a);
  const c = document.createElement('button');
  c.classList.add('button'), (c.textContent = '2'), d.appendChild(c);
  const o = document.createElement('button');
  o.classList.add('button'), (o.textContent = '3'), d.appendChild(o);
  const s = document.createElement('button');
  s.classList.add('buttonstart'), (s.textContent = 'Старт'), e.appendChild(s);
})();
