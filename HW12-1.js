
   const n=prompt('Введіть масив кількість елементів масиву')
  
    let array = []
    for (let i=1; i<=n; i++)  {const v = prompt('Введіть елемент масива'); array.push(v)}
     array.sort((a, b) => a - b)      
    alert(array) 
  array.splice (1, 3)
     alert(array)
    
   
    

