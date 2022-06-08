import "../src/index.css";

const recipe = {
  apple: 2,
  mango: 4,
  orange: 4,
};

const recipe01 = {
  ...recipe,
  juice: 3,
  mango: 2,
  banana: 1,
};

console.log(recipe);
console.log(recipe01);
