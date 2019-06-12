// Solution 1:

prompt('Угадайте число от 0 до 10', '');

var enteredNumber;

var conceivedNumber = 7;

while (+enteredNumber !== conceivedNumber) {
enteredNumber = prompt('Не верно. Попробуйте снова');
}

if (+enteredNumber === conceivedNumber) {
alert('В точку!');
enteredNumber = confirm('Сыграем ещё раз?');
}

// ----------------------------------------------------------

// Solution 2:

// prompt('Угадайте число от 0 до 10', '');

// var enteredNumber;

// var conceivedNumber = 7;

// do {
// enteredNumber = prompt('Не верно. Попробуйте снова');
// } while (+enteredNumber !== conceivedNumber);

// if (+enteredNumber === conceivedNumber) {
// alert('В точку!');
// enteredNumber = confirm('Сыграем ещё раз?');
// }

// ----------------------------------------------------------

// Solution 3:

// prompt('Угадайте число от 0 до 10', '');

// var enteredNumber;

// var conceivedNumber = 7;

// for (; +enteredNumber !== conceivedNumber; ) {
// enteredNumber = prompt('Не верно. Попробуйте снова');
// } if (+enteredNumber === conceivedNumber) {
// alert('В точку!');
// enteredNumber = confirm('Сыграем ещё раз?');
// }

// ----------------------------------------------------------

// Solution 4:

// var enteredNumber = prompt('Угадайте одно из двух чисел от 0 до 10', '');

// var conceivedNumber = 1;

// var secondConceivedNumber = 7;

// while (+enteredNumber !== conceivedNumber && secondConceivedNumber) {
//     enteredNumber = prompt('Оба не верно. Попробуйте снова');
//     }

// if (+enteredNumber === conceivedNumber || secondConceivedNumber) {
//     alert('Верно!');
//     enteredNumber = confirm('Сыграем ещё раз?');
// }