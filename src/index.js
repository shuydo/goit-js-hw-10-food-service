import './styles.css'; const menu = require('./menu.json');
import mTemplate from './card_templ.hbs';
toggler.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
  if (toggler.checked) return localStorage.setItem('dark', '1');
  localStorage.setItem('dark', '0')});
if (JSON.parse(localStorage.getItem('dark'))) {
  toggler.checked = true;
  document.body.classList.toggle('dark-theme')}
document.querySelector('.menu').innerHTML = menu.reduce((acc, Val) => acc + mTemplate(Val),'')

// Если в стилях селектор body.light-theme грохнуть, а его строки перекинуть в body выше, 
// и в html в 2х местах theme-switch-toggle переименовать в toggler