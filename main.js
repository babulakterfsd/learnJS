'use strict';

let completeOrder = () => {
  console.log(`chef satrts cooking food`);
  setTimeout(() => {
     console.log(`Food is being prepared to be served`);
  },3000)
  console.log(`food has been served`);
}

console.log(`Customer places the order`);

completeOrder();

console.log(`customer paid the bill and goes out`);