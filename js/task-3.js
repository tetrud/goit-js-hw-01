
// Задание-3

const ADMIN_PASSWORD = 'jgueryismyjam';
let  message = prompt('Введите пароль');

while (true) {
  if(!message){
    alert('Отменено пользователем!');
    break;
  }

  if (message === ADMIN_PASSWORD) {
    alert('Добро пожаловать!');
    break;
  }

  alert('Доступ запрещен, не верный пароль!')
}
