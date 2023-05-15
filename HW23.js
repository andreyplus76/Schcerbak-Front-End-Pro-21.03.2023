class Hamburger {
 constructor(size, stuffing) 
 { this.size = size; 
 this.stuffing = stuffing; 
 this.toppings = []; 
 }
 static get SIZE_SMALL() { return { price: 50, calories: 20 }; }
    static get SIZE_HUGE() {
     return { price: 100, calories: 40 
     }; 
     } 
     static get STUFFING_CHEESE() 
     { return { price: 10, calories: 20
      };
       } 
 static get STUFFING_SALAD() { 
 return { price: 20, calories: 5 
 }; 
 } 
 static get STUFFING_POTATOE() 
 { return { price: 15, calories: 10 
 };
  } 
  static get TOPPING_SAUCE() {
   return { price: 15, calories: 0
    }; 
    } 
    static get TOPPING_MAYO() {
     return { price: 20, calories: 5 
     }; 
     } 
 addTopping(topping){ 
 this.toppings.push(topping); 
 return this; 
 } 
 calculateCalories() { 
const toppingCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0); 
return this.size.calories + this.stuffing.calories + toppingCalories; 
} 
calculatePrice() {
 const toppingPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
  return this.size.price + this.stuffing.price + toppingPrice; 
    }}
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE); hamburger.addTopping(Hamburger.TOPPING_MAYO); console.log('Calories:', hamburger.calculateCalories())
 hamburger.addTopping(Hamburger .TOPPING_SAUCE); console.log('Calories:', hamburger.calculateCalories()); 
 console.log('Price with sauce:', hamburger.calculatePrice());
