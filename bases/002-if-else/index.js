"use strict";
function run() {
  console.log("Start run");
  const num = +prompt("give me number");
  if (!num) {
    alert("0");
  } else if (num < 0) {
    alert(-1);
  } else {
    alert(1);
  }
  console.log("End Run");
}
