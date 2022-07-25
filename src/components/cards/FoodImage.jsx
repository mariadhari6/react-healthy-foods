/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import FoodContext from "../../contexts/FoodContext";
const { RecipeContext } = FoodContext;
const FoodImage = () => {
  const { recipe } = useContext(RecipeContext);
  const src =
    recipe?.images?.LARGE?.url ??
    recipe?.images.REGULAR.url ??
    recipe.images.SMALL.url ??
    recipe?.images?.THUMBNAIL?.url ??
    "";
  return (
    <React.Fragment>
      <div className="absolute top-0  bottom-0 left-0 right-0 hover:block opacity-0 hover:opacity-100 transform hover:translate-y-0 -translate-y-4 transition-all  duration-300 cursor-pointer text-white">
        <div className="bg-gray-800 rounded-t-md bg-opacity-40 p-2 flex justify-between">
          <h1>{recipe?.label}</h1>
          <div className="flex items-center gap-2 text-sm">
            <p className="text-orange-300 flex items-center gap-1">
              <span className="material-symbols-outlined">
                sentiment_very_satisfied
              </span>{" "}
              {recipe?.mealType[0]}
            </p>
            <p className="text-orange-300">|</p>
            <p className="flex items-center gap-1">
              <span className="material-symbols-outlined text-lg">
                schedule
              </span>{" "}
              {recipe?.totalTime} min
            </p>
          </div>
        </div>
      </div>
      <img
        className="w-full max-h-banner h-full object-cover rounded-md"
        src={src}
        alt="Image Food"
      />
    </React.Fragment>
  );
};
export default FoodImage;
