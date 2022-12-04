'use strict';

const guessNumber = () => {

  const firstNum = prompt('Введите первое число');
  if (firstNum === null) {
    return;
  }
  const secondNum = prompt('Введите второе число');
  if (secondNum === null) {
    return;
  }

  const max = Math.floor(Math.max(firstNum, secondNum));
  const min = Math.ceil(Math.min(firstNum, secondNum));

  const random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);

  const newArr = [];

  while (true) {

    const userNum = prompt(`Отгадайте число от ${min} до ${max}?`);

    if (userNum === null) {
      break;
    }
    if (newArr.includes(userNum)) {
      alert('Это число вы уже вводили');
      continue;
    }
    if (userNum > random) {
      alert('Меньше! Попробуйте еще раз :)');
    } else if (newArr.length > (max - min - 1) * 0.3) {
      alert('У вас не осталось попыток :(');
      break;
    }
    if (userNum < random) {
      alert('Больше! Попробуйте еще раз :)');
    } else if (newArr.length > (max - min - 1) * 0.3) {
      alert('У вас не осталось попыток :(');
      break;
    }
    if (+userNum === random) {
      alert('Правильно!');
      break;
    } else if (Number.isNaN(+userNum)) {
      alert('Введите число');
      continue;
    }

    newArr.push(userNum);
  }
  console.log(newArr);
}

guessNumber();
