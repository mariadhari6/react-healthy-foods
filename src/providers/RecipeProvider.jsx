import FoodContext from "../contexts/FoodContext";
import Recipe from "../pages/Recipe";
const RecipeProvider = () => {
  return (
    <FoodContext.RecipeProvider>
      <Recipe />
    </FoodContext.RecipeProvider>
  );
};
export default RecipeProvider;
