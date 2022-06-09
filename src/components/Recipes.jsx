
import { useState } from 'react';

const juice = {
  apple: 2,
  mango: 4,
  orange: 4,
};

const anotherJuice = {
  ...juice,
  juice: 3,
  mango: 2,
  banana: 1,
};

console.log(juice);
console.log(anotherJuice);

const Recipes = () => {
  const [recipe, setRecipe] = useState(juice);
  return (
    <div>
      <h3>Current Recipe</h3>
      <button onClick={() => setRecipe(juice)}>juice</button>
      <button onClick={() => setRecipe(anotherJuice)}>anotherJuice</button>

      <ul>
        {Object.keys(recipe).map((material) => (<li key={material}>{material} : {recipe[material]}</li>))}
      </ul>
    </div>
  )
}

export default Recipes