/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import Recipes from "../components/foods/Recipes";
import Loading from "../components/reuseable/Loading";
import NotFound from "../components/reuseable/NotFound";
import { fetchRecipe } from "../controllers/RecipeController";
const Recipe = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    fetchRecipe(params.foodId, setLoading, setRecipe);
  }, [params.foodId]);
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
