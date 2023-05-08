class Human {
constructor(name, age) {
 this.name = name;
  this.age = age;
   }
  info() {
 console.log(`HUMAN: ${this.name} ${this.age}`)
  }
   } 
 class Car {
constructor(brand, model, year, regnum) { 
this.brand = brand;
this.model = model; 
this.year = year; 
this.regnum = regnum;
 } 
 owner(owner) { 
 if (owner.age < 18) {
console.log('Ти занабто молодий') 
} else { 
this.ownerName = owner; 
} 
} 
carInfo() 
{ console.log(`CAR: ${this.brand} ${this.model} ${this.year} ${this.regnum}`);
this.ownerName ? this.ownerName.info : console.log(`У ${this.brand}-${this.model} володаря нема`); 
} 
} 
const oleg = new Human('Олег', 20);
 const semen = new Human('Семен', 17); 
 const olga = new Human('Ольга', 22); 
 
  const volvo = new Car('volvo', 'xc', 2020, 'АА4955НО'); 
  const nissan = new Car('nissan', 'note', 2022, 'ВН4576ВР');
   const volksvagen = new Car('volksvagen', 'jetta', 2021, 'ВК3457ВР'); 
   oleg.info();
  semen.info();
  volvo.owner(oleg);
 nissan.owner(semen);
  nissan.owner(olga);
    volvo.carInfo();
     nissan.carInfo(); 
     volksvagen.carInfo();



