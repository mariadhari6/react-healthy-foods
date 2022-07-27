import { baseUrl } from "../configs/api";

const fetchRecipe = (foodId, setLoading, setRecipe) => {
  if (setLoading) {
    setLoading(true);
  }
  const endpoint = `${baseUrl.recipe}/${foodId}?app_id=${process.env.REACT_APP_ID_RECIPE}&app_key=${process.env.REACT_APP_KEY_RECIPE}&type=public`;
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      if (data?.recipe) {
        const {
          label,
          images,
          dietLabels,
          healthLabels,
          ingredientLines,
          ingredients,
          calories,
          totalTime,
          mealType,
          totalNutrients,
          totalDaily,
        } = data?.recipe;
        const recipe = {
          label,
          images,
          dietLabels,
          healthLabels,
          ingredientLines,
          ingredients,
          calories,
          totalTime,
          mealType,
          totalNutrients,
          totalDaily,
        };
        setRecipe(recipe);
      } else {
        setRecipe(null);
      }
      setLoading(false);
    });
};
const fetchNutrients = (
  itemRecipe,
  setLoading,
  index,
  ingredients,
  setIngredients
) => {
  if (setLoading) {
    setLoading(true);
  }
  const url = `${baseUrl.nutrients}?app_id=${process.env.REACT_APP_ID_FOOD}&app_key=${process.env.REACT_APP_KEY_FOOD}`;
  const data = {
    ingredients: [
      {
        quantity: itemRecipe?.quantity,
        measureURI: itemRecipe?.measure,
        foodId: itemRecipe?.foodId,
      },
    ],
  };
  const params = {
    method: "POST",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setLoading(false);
      const recipe = ingredients[index];
      recipe.calories = data?.calories;
      setIngredients([
        ...ingredients.slice(0, index),
        recipe,
        ...ingredients.slice(index + 1, ingredients.length),
      ]);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
export { fetchRecipe, fetchNutrients };
