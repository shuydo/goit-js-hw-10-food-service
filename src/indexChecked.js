import './styles.css';
const menu = require('./menu.json');// import menu from './menu.js';
import mTemplate from './card_templ.hbs'; // =========== конец иморта и определение имён тем для body
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}; // ============================================================== объявление привязок для узлов
const bodyRef = document.body;
const toggleRef = document.querySelector('#theme-switch-toggle');
const gridRef = document.querySelector('.menu'); 
toggleRef.addEventListener('change', toggleValue);// ================ слушатель тоглера
if (JSON.parse(localStorage.getItem('dark'))) {
  // ================ пресеттер при входе на страницу
  toggleRef.checked = true;
  bodyRef.classList.add(Theme.DARK);
} else {
  localStorage.setItem('dark', 'false');
  bodyRef.classList.add(Theme.LIGHT);
} // =============================================================== обработчик прослушивателя
function toggleValue() {
  if (toggleRef.checked) {
    localStorage.setItem('dark', 'true');
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('dark', 'false');
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
} // ============================================================ парс по шаблону
gridRef.innerHTML = menu.reduce((acc, Val) => acc + mTemplate(Val), '');
