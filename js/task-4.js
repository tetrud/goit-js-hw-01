// Задание-4

const credits = 23580;
const pricePerDroid = 3000;
let quantityDroid = prompt('Сколько дроидов вы хотите купить?');
let totalPrice = quantityDroid * pricePerDroid;

if (quantityDroid === null) {
   alert('Отменено пользователем!');
}  else if (totalPrice > credits) {
   alert('Недостаточно средств на счету!');
}  else {
   alert(`Вы купили ${quantityDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов`)
}
