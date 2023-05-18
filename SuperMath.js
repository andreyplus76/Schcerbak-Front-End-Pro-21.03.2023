
  
  
 class SuperMath { 
 constructor (obj){
     this.obj = {}
    } ; 
  sum(a, b) { 
     alert(a + b); 
 } 
 sub(a, b) { 
     alert(a - b); 
 } 
  
div(a, b) { 
     if (b == 0) { 
         console.error('Делить на ноль нельзя!'); 
     } 
     alert(a / b); 
 } 
  
 mul(a, b) { 
     alert(a * b); 
 } 
  
 mod(a, b) { 
     alert(a % b); 
 } 
  
  
  
 input() { 
    this.obj.X = +prompt('Введите число X: ',0); 
    this.obj.Y = +prompt('Введите число Y: ',0); 
    this.obj.znak = prompt('Введите znak(возможные варианты znak=>  `+ - / * %`): ', "/"); 
 } 
 check(obj, flag) { 
     var flag = (flag == undefined) ? confirm('Хотите произвести действие ' +
          obj.znak + ' c X:' 
          + obj.X + ' и Y' + obj.Y) : flag; 
  
     if (flag) { 
         switch(obj.znak) { 
             case '+': 
                 this.sum(obj.X, obj.Y); 
                 break; 
             case '-': 
                 this.sub(obj.X, obj.Y); 
                 break; 
             case '/': 
                 this.div(obj.X, obj.Y); 
                 break; 
             case '*': 
                 this.mul(obj.X, obj.Y); 
                 break; 
             case '%': 
                 this.mod(obj.X, obj.Y); 
                 break; 
         } 
     } else { 
         this.input(); 
         this.check(this.obj, true); 
     } 
 }
 } 
 
 
p = new SuperMath();

 p.input()
 p.check()
 
