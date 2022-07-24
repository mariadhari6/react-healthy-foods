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
          totalNutriens,
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
          totalNutriens,
          totalDaily,
        };
        setRecipe(recipe);
      } else {
        setRecipe(null);
      }
      setLoading(false);
    });
};
export { fetchRecipe };
