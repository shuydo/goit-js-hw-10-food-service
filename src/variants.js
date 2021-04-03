// Свой слушатель и хранение названия темы (прибавляемого к body класса)

// inputRef.addEventListener('change', updateValue);

// if (!localStorage.getItem('theme')) {
//   localStorage.setItem('theme', Theme.LIGHT);
//   bodyRef.classList.add(Theme.LIGHT);
// } else {
//   bodyRef.classList.add(localStorage.getItem('theme'));
//   if (localStorage.getItem('theme') === Theme.DARK)
//     switchcherRef.checked = true;
// }

// function updateValue() {
//   if (localStorage.getItem('theme') === Theme.LIGHT) {
//     localStorage.setItem('theme', Theme.DARK);

//     bodyRef.classList.remove(Theme.LIGHT);
//     bodyRef.classList.add(Theme.DARK);
//   } else {
//     localStorage.setItem('theme', Theme.LIGHT);

//     bodyRef.classList.remove(Theme.DARK);
//     bodyRef.classList.add(Theme.LIGHT);
//   }
// }
// =======================================================
// Функия тоглера на проверке "буля" тёмной темы

// function toggleValue() {

//   if (!JSON.parse(localStorage.getItem('dark'))) {

//     localStorage.setItem('dark', 'true');
//     bodyRef.classList.remove(Theme.LIGHT);
//     bodyRef.classList.add(Theme.DARK);
//   } else {
//     localStorage.setItem('dark', 'false');
//     bodyRef.classList.remove(Theme.DARK);
//     bodyRef.classList.add(Theme.LIGHT);
//   }
// }
// =======================================================