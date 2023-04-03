let year = prompt('Введіть Ваш рік народження')
switch (year) {
case NaN:
alert('Шкода, що Ви не захотіли ввести свій рік народження')
break;
case undefined :
alert('Шкода, що Ви не захотіли ввести свій рік народження')
break;
case '' :
alert('Шкода, що Ви не захотіли ввести свій рік народження')
break;
case null :
alert('Шкода, що Ви не захотіли ввести свій рік народження')
   break;
   
   case 'year':
   year = Number (year)
    let old = (year-=2023)*(-1)
}

let city = prompt('Введіть місто народження')
    
    switch (city) {
    case NaN:
alert('Шкода, що Ви не захотіли ввести своє місто народження')
break;
case undefined :
alert('Шкода, що Ви не захотіли ввести своє місто народження')
break;
case null :
alert('Шкода, що Ви не захотіли ввести своє місто народження')
   break;
   case '' :
alert('Шкода, що Ви не захотіли ввести своє місто народження')
   
   
   case city:
   city = city.split(' ').join('')
   
}
  
let sport = prompt('Який Ваш улюблений вид спорту?')
switch (sport) {
case '':
alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
break;
case NaN:
alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
break;
case undefined :
alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
break;
case null :
alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
   break;
   case sport:
sport = sport.split(' ').join('')
}
    
   
  let old = (year-=2023)*(-1)
 
switch (sport) {
case NaN:
alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
break;
case undefined :
alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
break;
case null :
alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
   break;
  case 'бокс':
   alert('Твій вік ' + old + ' років' + '\r' + 'Ти живеш у місті ' + city + '\r'  + 'Круто! Хочеш стати Клічко?')
   break;

   case sport:
  
    alert('Твій вік ' + old + ' років' + '\r' + 'Ти живеш у місті ' + city + '\r'  + 'Ваш улюблений вид спорту ' + sport)
   break;
   case 'футбол':
   alert('Твій вік ' + old + ' років' + '\r' + 'Ти живеш у місті ' + city + '\r'  + 'Круто! Хочеш стати Шевченко?')
   break;
 
   case 'автогонки':
   alert('Твій вік ' + old + ' років' + '\r' + 'Ти живеш у місті ' + city + '\r' + 'Круто! Хочеш стати Шумахером?')
   break;
}