// ── BOOKSHELF ──────────────────────────────────────────────
const books = [
  {t:"Behave",                         c:"#3a2a1a",h:145,w:32},
  {t:"The Body Keeps the Score",        c:"#5a2a1a",h:142,w:34},
  {t:"Why We Love",                     c:"#6a2a2a",h:126,w:27},
  {t:"The Tell-Tale Brain",             c:"#1e3a2a",h:140,w:30},
  {t:"Phantoms in the Brain",           c:"#163020",h:133,w:34},
  {t:"Livewired",                       c:"#1a3535",h:128,w:28},
  {t:"Incognito",                       c:"#142030",h:122,w:26},
  {t:"Your Brain, Explained",           c:"#3a3010",h:135,w:30},
  {t:"A Brief History of Intelligence", c:"#252530",h:138,w:32},
  {t:"The Mind and Brain",              c:"#2a2018",h:125,w:28},
  {t:"Descartes' Error",                c:"#201810",h:130,w:30},
  {t:"Expression of Emotions",          c:"#182018",h:136,w:30},
  {t:"The Emotional Brain Revisited",   c:"#201828",h:128,w:28},
  {t:"Bhagavad Gita",                   c:"#5a4008",h:140,w:26},
  {t:"Mahabharata",                     c:"#4a3806",h:150,w:36},
  {t:"Ramayana",                        c:"#5a3c0a",h:145,w:30},
];

const row = document.getElementById('booksRow');
if (row) {
  books.forEach(b => {
    const d = document.createElement('div');
    d.className = 'book';
    d.style.cssText = `background:${b.c};height:${b.h}px;width:${b.w}px;`;
    d.title = b.t;
    const s = document.createElement('span');
    s.className = 'book-spine';
    s.textContent = b.t;
    d.appendChild(s);
    row.appendChild(d);
  });
}

// ── SCROLL REVEAL ──────────────────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── MOBILE NAV HAMBURGER ───────────────────────────────────
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.nextElementSibling.classList.toggle('open');
  });
}
