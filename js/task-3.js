
// Задание-3

const ADMIN_PASSWORD = 'jgueryismyjam';
let  message = prompt('Введите пароль');

  if(!message){
    alert('Отменено пользователем!');
  } else if (message === ADMIN_PASSWORD) {
    alert('Добро пожаловать!');
  } else {
    alert('Доступ запрещен, не верный пароль!');
}
