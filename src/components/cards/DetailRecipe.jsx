import { useContext, useEffect, useState } from "react";
import FoodContext from "../../contexts/FoodContext";
import {
  exportRecipe,
  fetchNutrients,
} from "../../controllers/RecipeController";
const { RecipeContext } = FoodContext;
const DetailRecipe = () => {
  const { recipe } = useContext(RecipeContext);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  useEffect(() => {
    ingredients?.forEach((itemRecipe, index) => {
      fetchNutrients(
        itemRecipe,
        setLoading,
        index,
        ingredients,
        setIngredients
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-white shadow-sm drop-shadow-sm rounded-md">
      <div className="flex justify-between p-3 px-4 flex-wrap gap-4">
        <div className="flex gap-2 items-center">
          <span className="material-symbols-outlined text-gray-500 text-3xl">
            library_books
          </span>
          <div>
            <h1 className="font-bold uppercase">Details recipe</h1>
            <p className="text-gray-500 text-xs font-light">
              Detail ingredients with total calories
            </p>
          </div>
        </div>
        <button
          className="hover:shadow-lg hover:shadow-orange-600/50 outline-none uppercase text-xs flex items-center gap-2 py-1 px-2 hover:text-white hover:bg-orange-600  rounded-md border-2 border-orange-600 text-orange-600 font-medium"
          onClick={() => exportRecipe(recipe.label)}
        >
          <span className="material-symbols-outlined">cloud_download</span>
          Download recipe pdf
        </button>
      </div>
      <hr />
      <div className="px-4 py-6" id="recipes">
        <div className="divide-x-2 divide-gray-400">
          <div></div>
          <div className="flex flex-col gap-4">
            {ingredients?.map((item, index) => (
              <div className="flex gap-2" key={index}>
                <span className="material-symbols-outlined relative font-bold right-2 rounded-full h-4 w-4 text-xs flex justify-center items-center text-white bg-orange-600">
                  check
                </span>
                <div className="flex gap-2">
                  <img
                    src={item?.image}
                    className="w-20 h-20 rounded object-cover"
                    alt="recipe"
                  />
                  <div className="flex flex-col gap-1 justify-between">
                    <h3 className="uppercase font-medium">{item?.food}</h3>
                    <p className="text-gray-400 text-xs">
                      {item?.quantity} {item?.measure} of {item?.food}
                    </p>
                    <div className="text-orange-600 border-orange-600 border w-fit text-xs font-semibold py-1 px-2 rounded-full">
                      <span className="px-2 py-badge relative right-1 rounded-full bg-orange-600 text-white">
                        {item?.calories}
                      </span>{" "}
                      kcal
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailRecipe;
