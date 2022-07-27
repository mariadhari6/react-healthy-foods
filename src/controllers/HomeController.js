import IngredientList from "../assets/ingredients.json";
import { baseUrl } from "../configs/api";

const ingredients = IngredientList.ingredients;
const getRandomIngredient = () => {
  const min = Math.ceil(0);
  const max = Math.floor(ingredients.length - 1);
  return ingredients[Math.floor(Math.random() * (max - min) + min)];
};
const fetchFood = (ingredient, addFood, setLoading, setNextFoods) => {
  const app_id = process.env.REACT_APP_ID_RECIPE;
  const app_key = process.env.REACT_APP_KEY_RECIPE;
  const endpoint = baseUrl.recipe;
  if (setLoading) {
    setLoading(true);
  }
  fetch(
    `${endpoint}?app_id=${app_id}&app_key=${app_key}&type=public&beta=false&q=${ingredient}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data?.hits) {
        data.hits?.forEach((item) => {
          const { uri, label, image, images, healthLabels } = item.recipe;
          const foodId = uri?.substring(uri?.indexOf("_") + 1, uri.length);
          const recipe = { foodId, label, image, images, healthLabels };
          addFood(recipe);
        });
        if (setLoading) {
          setLoading(false);
        }
        if (setNextFoods) {
          setNextFoods(data._links.next.href);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const fetchNextFood = (url, addFood, setLoading, setNextFoods) => {
  if (setLoading) {
    setLoading(true);
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data?.hits) {
        data.hits?.forEach((item) => {
          const { uri, label, image, images, healthLabels } = item.recipe;
          const foodId = uri?.substring(uri?.indexOf("_") + 1, uri.length);
          const recipe = { foodId, label, image, images, healthLabels };
          addFood(recipe);
        });
        if (setLoading) {
          setLoading(false);
        }
        if (setNextFoods) {
          setNextFoods(data._links.next.href);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const fetchQueries = (setAutoCompletes, keyword) => {
  const app_id = process.env.REACT_APP_ID_FOOD
  const app_key = process.env.REACT_APP_KEY_FOOD
  const url = `${baseUrl.auto_complete}?app_id=${app_id}&app_key=${app_key}&q=${keyword}&limit=5`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setAutoCompletes(data)
    })
    .catch(error => {
      setAutoCompletes([])
    })
}
export { getRandomIngredient, fetchFood, fetchNextFood, fetchQueries };
