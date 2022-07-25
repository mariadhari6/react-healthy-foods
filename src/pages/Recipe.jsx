/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import Recipes from "../components/foods/Recipes";
import Loading from "../components/reuseable/Loading";
import NotFound from "../components/reuseable/NotFound";
import { fetchRecipe } from "../controllers/RecipeController";
import FoodContext from "../contexts/FoodContext";
const { RecipeContext } = FoodContext;
const Recipe = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const { recipe, setRecipe } = useContext(RecipeContext);
  useEffect(() => {
    fetchRecipe(params.foodId, setLoading, setRecipe);
  }, [params.foodId, setRecipe]);
  return (
    <React.Fragment>
      <AppBar />
      {loading ? (
        <div className="flex justify-center items-center w-full absolute h-screen">
          <Loading />
        </div>
      ) : recipe ? (
        <Recipes />
      ) : (
        <NotFound />
      )}
    </React.Fragment>
  );
};
export default Recipe;
