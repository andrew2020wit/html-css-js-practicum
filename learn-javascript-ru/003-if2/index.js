"use strict";
function run() {
  console.log("Start run");
  f1();
  console.log("End Run");
}

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

function f1() {
  const a = 1;
  let b = +prompt(" 1 or 7 ?");
  let result;
  result = a + b < 4 ? "malo" : "mnogo";
  alert(result);
  return result;
}
