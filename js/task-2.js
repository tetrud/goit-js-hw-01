
// Задание-2

const ordered = 50;
const total =  ordered >= 100 ? "На складе не достаточно товаров!" : "Заказ оформлен, с вами свяжется менеджер";

console.log(total);

// если  ordered = 20, в console выводится "Заказ оформлен, с вами свяжется менеджер";
// если  ordered = 80, в console выводится "Заказ оформлен, с вами свяжется менеджер";
// если  ordered = 130, в console выводится "На складе не достаточно товаров!";
