let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let arrayPositiv = []
let arrayNegative = []
let arrayPositivEven = []
let arrayPositivOdd = []
    for (let i=0; i<array.length; i++)  {if (array[i]>0) {arrayPositiv.push(array[i])}}
     alert('Кількість позитивних ел-тів ' + arrayPositiv.length)
     let sum=0
    for (let i=0; i<arrayPositiv.length;i++) {sum+=arrayPositiv[i]}
    alert('Сума позитивних елементів ' + sum)
    alert('Мінімальний ел-т масива ' + Math.min(...array))
    alert('Порядковий номер мін. ел-ту масиву ' + array.indexOf(Math.min(...array)))
    alert('Максимальний ел-т масива ' + Math.max(...array))
    alert('Порядковий номер макс. ел-ту масиву ' + array.indexOf(Math.max(...array)))
   
    for (let i=0; i<array.length; i++)  {if (array[i]<0) {arrayNegative.push(array[i])}}
     alert('Кількість негативних ел-тів ' + arrayNegative.length) 
     
     for (let i=0; i<arrayPositiv.length; i++)  {if (arrayPositiv[i] % 2>0) {arrayPositivOdd.push(arrayPositiv[i])}}
     alert('Кількість непарних позитивних ел-тів ' + arrayPositivOdd.length)
     
    for (let i=0; i<arrayPositiv.length; i++)  {if (arrayPositiv[i] % 2==0) {arrayPositivEven.push(arrayPositiv[i])}}
     alert('Кількість парних позитивних ел-тів ' + arrayPositivEven.length)
     alert(arrayPositivEven)
     let sumEven=0
 for (let k=0; k<arrayPositivEven.length;k++) {sumEven+=arrayPositivEven[k]}
    alert('Сума парних позитивних елементів ' + sumEven)
    
    let sumOdd=0
 for (let t=0; t<arrayPositivOdd.length;t++) {sumOdd+=arrayPositivEven[t]}
    alert('Сума непарних позитивних елементів ' + sumOdd)
    
    let productPositiv=1
 for (let t=0; t<arrayPositivOdd.length;t++) {productPositiv*=arrayPositivEven[t]}
    alert('Добуток позитивних елементів ' + productPositiv)
    
    alert('Найбільшийий ел-т масива ' + Math.max(...array))
    
    alert('Порядковий номер макс. ел-ту масиву ' + array.indexOf(Math.max(...array)))
    
    let arrayNew = []
    for (let i=0; i<array.length; i++)  {if (array[i]!=(Math.max(...array)))  array[i]=0; {arrayNew.push(array[i])}}
    alert(arrayNew)
    

