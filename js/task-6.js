// Задание-6

let total = 0;

do {
  let input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  if (!Number(input)) {
    alert(`Было введено не число`);
    continue;
  }

  total += input;

} while (true);

alert(`Общая сумма чисел равна ${total}`);