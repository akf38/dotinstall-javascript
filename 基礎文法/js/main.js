'use strict';

console.log('Hello World! from main.js');

const score = 60;
score >= 80 ? console.log('Great!') : console.log('Ok..');

const name = 'taguchi';

if (score >= 50 && name === 'taguchi'){
  console.log('Good job!');
}

const signal = 'green';

switch(signal){
  case 'red':
    console.log('Stop!');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
  case 'green':
    console.log('Go!');
    break;
  default :
    console.log('Wrong signal!');
    break;
}

for (let i = 1; i <= 10; i++) {
  console.log(`hello ${i}`);
}

// let hp = 100;
// while(hp > 0){
//   console.log(`${hp}HP LEFT!`);
//   hp -= 15;
// }

let hp = -50;
do{
  console.log(`${hp}HP LEFT!`);
  hp -= 15;
}while(hp > 0)

for (let i = 1; i <= 10; i++) {
  if (i %3 === 0){
    continue;
  }
  if (i === 4){
    break;
  }
  console.log(`hello ${i}`);
}

function showAd(message = 'Ad'){
  console.log('--------');
  console.log(`---${message}---`);
  console.log('--------');
}

showAd('header Ad');
console.log('Tom is great!');
console.log('Tom is great!');
console.log('Tom is great!');
showAd('middle1 Ad');
console.log('Tom is great!');
console.log('Tom is great!');
console.log('Tom is great!');
showAd('middle2 Ad');
console.log('Tom is great!');
console.log('Tom is great!');
console.log('Tom is great!');
showAd('last ad');
showAd();


// function sum(a,b,c){
//   // console.log(a + b + c);
//   return a + b + c;
// }

// sum = function (a,b,c){
//   // console.log(a + b + c);
//   return a + b + c;
// };

// const sum = (a,b,c) =>  a + b + c;


// sum(1,2,3);
// sum(3,4,5);

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

// const double = function(a){
//   return a * 2;
// }

// const double = a => a * 2;

// console.log(double(12));

{
  const x = 100;
  console.log(x);
}

