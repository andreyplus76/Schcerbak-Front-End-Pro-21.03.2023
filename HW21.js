class Human { 
constructor(name,sex)
 { this.name = name
  this.sex = sex }
   }
   
 class Apartament{ 
addResident() {
this.residents=arguments 
//console.log(this.residents)
}
 }
 
 class House {
 
     constructor(maxApartments)
 { this.maxApartments = maxApartments
  }
  
  addApartment() {

 this.addApartment=arguments 
let masApartments = []
if (arguments.length<=this.maxApartments) { for (let i=0; i<arguments.length; i++) {masApartments.push(arguments[i]); console.log(masApartments)} 
    
} else (console.log('Занадто багато квартир')) 

}    
 }
let ivan = new Human('Иван', ' м')
let mariya = new Human('Мария', ' ж')
let kostya = new Human('Костя', ' м')
let kolya = new Human('Коля', ' м')

let apart1 = new Apartament()
let apart2 = new Apartament()
let apart3 = new Apartament()
let apart4 = new Apartament()

let house1 = new House(3)
apart1.addResident(mariya, kostya, kolya)
apart2.addResident(ivan, mariya, kostya)
apart3.addResident(mariya, kostya, kolya,ivan, mariya, kostya)
apart4.addResident(mariya)
house1.addApartment(apart1, apart2, apart3, apart4)

            
