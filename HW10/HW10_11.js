let naturalNumber = prompt('enter natural number')

if (naturalNumber == null) { alert('so sad that you did not enter natural number')
} else if (isNaN (Number.isInteger(naturalNumber)) || (naturalNumber.trim()==='') || !Number.isInteger(naturalNumber)){alert('not correct number. try again')}
let array = [];
for (let i = 0; i <= naturalNumber ; i=i+2) {if (naturalNumber % i == 0) {array.push (i)}}
let sum = 0
for (let i = 0; i < array.length; i++ ) {
    sum += array[i]
}
alert(sum)

