let year = prompt('Введіть Ваш рік народження')
year = Number (year)
old = (year-=2023)*(-1)
let city = prompt('Введіть місто народження').split(' ').join('')

let sport = prompt('Який Ваш улюблений вид спорту?')


switch (city) {
   case 'Київ':
   alert('Твій вік ' + old + ' років' + '\r' + 'Ти живеш у столиці України' + '\r' + 'Ти любиш ' + sport)
   break;
   case 'Вашингтон':
   alert('Твій вік ' + old + ' років' + '\r' + 'Ти живеш у столиці США' + '\r' + 'Ти любиш ' + sport)
   break;
   case 'Лондон':
   alert('Твій вік ' + old + ' років' + '\r' + 'Ти живеш у столиці ВЕЛИКОБРИТАНІЇ' + '\r' + 'Ти любиш ' + sport)
   break;
   case city:
   alert('Твій вік ' + old + ' років' + '\r' + 'Ти живеш у місті ' + city + '\r' + 'Ти любиш ' + sport)
}
