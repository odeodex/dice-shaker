/**
 * ==todos==
 * 
 * bikin fungsi rolldice
 * bikin math random buat ngacak angka
 * bikin loop buat ngeroll
 * sambungin display hasil ke html pake DOM
 * sambungin perintah eksekusi kalo button dipencet ke html pake DOM
 * bikin result kalo button dipencet
 * 
 */


function rollDice() {
  return Math.ceil(Math.random() * 6)
}
for (let i = 0; i < 5; i++);
// console.log(rollDice());


function showNumber(number) {
  let roll = document.getElementById('dicedisplay');
  roll.innerHTML = number;
}

let button = document.getElementById('button');

button.onclick = function () {
  let result = rollDice();
  showNumber(result);
};