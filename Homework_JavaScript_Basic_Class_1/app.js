// Write a JavaScript program that will calculate the price of 30 Phones, 
// where the price of one phone is $119.95 and the tax rate is 5%.

let phonePrice = 119.95;
let taxRate = 5;
let priceWithCalculatedTax = phonePrice * (1 + (taxRate / 100))
let quantity = 30;
let totalPrice = quantity * priceWithCalculatedTax;

console.log(`Price for phone: ${phonePrice} with calculated tax of: ${taxRate}% is equal to ${priceWithCalculatedTax.toFixed(2)} 
Total price for ${quantity} phones with calculated tax: ${totalPrice.toFixed(2)}`);
