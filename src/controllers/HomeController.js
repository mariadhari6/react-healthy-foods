import IngredientList from "../assets/ingredients.json";
import { baseUrl } from "../configs/api";

const ingredients = IngredientList.ingredients;
const getRandomIngredient = () => {
  const min = Math.ceil(0);
  const max = Math.floor(ingredients.length - 1);
  return ingredients[Math.floor(Math.random() * (max - min) + min)];
};
const fetchFood = (ingredient, addFood) => {
  const app_id = process.env.REACT_APP_ID_FOOD;
  const app_key = process.env.REACT_APP_KEY_FOOD;
  const endpoint = baseUrl.foods;
  fetch(`${endpoint}?app_id=${app_id}&app_key=${app_key}&ingr=${ingredient}`)
    .then((response) => response.json())
    .then((data) => {
      if (data?.hints) {
        data.hints?.forEach((item) => {
          if (item?.food?.image) {
            addFood(item.food);
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
export { getRandomIngredient, fetchFood };
