let operation = prompt('Введіть операцію, яку хоччете зробити: add, sub, mult, div')

let a = prompt('Введіть перше число')


if (a == !NaN) {let a = prompt('Введіть перше число')} 
    
else (false) 
{let b = prompt('Введіть друге число') 
    
}
if (a == !undefined) {let a = prompt('Введіть перше число')}
if (a == !null) {let a = prompt('Введіть перше число')}
if (a == !' ') {let a = prompt('Введіть перше число')}
a = Number (a)

    

let b = prompt('Введіть друге число')
if (b == !NaN) {let a = prompt('Введіть перше число')}
if (b == !undefined) {let a = prompt('Введіть перше число')}
if (b == !null) {let a = prompt('Введіть перше число')}
if (b == !' ') {let a = prompt('Введіть перше число')}
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
