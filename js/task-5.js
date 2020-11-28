
// Задание-5

let country = prompt ('Введите страну доставки');
country = country.toLowerCase();
let cost;

switch (country) {
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

if(country === null){
  alert('Отменено пользователем!');
}
