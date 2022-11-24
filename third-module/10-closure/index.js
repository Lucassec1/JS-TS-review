function rememberSum(x) {
   return function(y) {
      return x + y; 
   }
}

let sum = rememberSum(3);
console.log(sum(5));

let sum1 = rememberSum(4);
console.log(sum1(7));

function counter(i) {
   let cont = i;
   let sumCont = function() {
      console.log(cont);
      cont ++;
   }
   return sumCont;
}

let myCounter = counter(7);

myCounter();
myCounter();
myCounter();
myCounter();
