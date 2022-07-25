import { createContext, useState } from "react";

// const initalRecipe = {
//   label: "",
//   images: [],
//   healthLabels: [],
//   dietLabels: [],
//   ingredientLines: [],
//   ingredients: [],
//   calories: 123.0,
//   totalTime: 0.0,
//   mealType: "lunch/dinner",
//   totalNutriens: {},
//   totalDaily: {},
// };
const FoodContext = () => {
  const RecipeContext = createContext({});
  const RecipeProvider = (props) => {
    const [recipe, setRecipe] = useState({});
    const context = { recipe, setRecipe };
    return (
      <RecipeContext.Provider value={context}>
        {props.children}
      </RecipeContext.Provider>
    );
  };
  return {
    RecipeContext,
    RecipeProvider,
  };
};
export default FoodContext();
