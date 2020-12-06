"use strict";
function run() {
  console.log("Start run");

  console.log("user name: ", getUserName());

  console.log("End Run");
}

function getUserName() {
  let userName;
  userName = prompt("What are your name?");
  if (!userName) {
    return "incognito";
  }
  if (confirm(`is you name ${userName}?`)) {
    console.log("correct name: ", userName);
  } else {
    console.log("wrong name: ", userName);
    userName = getUserName();
  }
  return userName;
}
