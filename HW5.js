let operation = prompt('Введіть операцію, яку хоччете зробити: add, sub, mult, div')

let a = prompt('Введіть перше число')
a = Number (a)
let b = prompt('Введіть друге число')
b = Number (b)

switch (operation) {
   case 'add':
   alert(a + '+' + b + '=' + (a+b))
   break;
   case 'sub':
   alert(a + '-' + b + '=' + (a-b))
   break;
   case 'mult':
   alert(a + '*' + b + '=' + (a*b))
   break;
   case 'div':
   alert(a + '/' + b + '=' + (a/b))
}