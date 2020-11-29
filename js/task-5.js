
// Задание-5

let country = prompt ('Введите страну доставки');
let cost;

if(country === null){
  alert('Отменено пользователем!');
} else {
switch (country.toLowerCase()) {
  case 'китай': {
        cost = 100;
        country = 'Китай'
    alert(`Доставка в ${country}, будет стоить ${cost} кредитов`);
    break; 
  }

    case 'чили':{    
      cost = 250;
       country = 'Чили'
      alert(`Доставка в ${country}, будет стоить ${cost} кредитов`);
    break;
  }

    case 'австралия':{
      cost = 170;
       country = 'Австралия'
      alert(`Доставка в ${country}, будет стоить ${cost} кредитов`);
    break;
  }

    case 'индия':{
      cost = 80;
       country = 'Индия'
      alert(`Доставка в ${country}, будет стоить ${cost} кредитов`);
    break;
  }
    default:
      alert('В вашей стране доставка не доступна');
}

}