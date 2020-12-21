"use strict";
function run() {
  console.log("Start run");
  f1();
  console.log("End Run");
}

// Перепишите 'if..else' в '?'
// важность: 5
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

function f1() {
  let message;

  const login = prompt("login?");

  message =
    login == "Сотрудник"
      ? "Привет"
      : login == "Директор"
      ? "Здравствуйте"
      : login == ""
      ? "Нет логина"
      : "";

  alert(message);
  return message;
}
