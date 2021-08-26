const ingredients = ['eggs', 'milk', 'flour', 'sugar', 'baking soda', 'baking powder', 'chocolate chips', 'bananas'];

let i=0; 
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


for (let i = 0; i < ingredients.length; i++) {
  ingredients.reverse();
  console.log(ingredients[i]);
}
// cannot be: console.log(ingredients[i].reverse()) 
// prints too many times if console.log(ingredients.reverse())
