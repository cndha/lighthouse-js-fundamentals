const howManyHundreds = function(num) {
  return num % 100 === 0;
}
console.log(howManyHundreds(20050));
// this just spits out true/false, how do you get it to return a numerical value?


const howManyHundreds = function(num) {
  return (num/100) - ((num % 100) / 100);
}
console.log(hundreds(20050));
