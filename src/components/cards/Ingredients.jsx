import { useContext } from "react";
import FoodContext from "../../contexts/FoodContext";
const { RecipeContext } = FoodContext;
const Ingredients = () => {
  const { recipe } = useContext(RecipeContext);
  const { ingredients } = recipe;
  return (
    <div className="bg-white shadow-sm drop-shadow-sm rounded-md">
      <div className="flex justify-between p-3 px-4">
        <div className="flex gap-2 items-center">
          <span className="material-symbols-outlined text-gray-500 text-3xl">
            restaurant
          </span>
          <div>
            <h1 className="font-bold uppercase">Ingredients:</h1>
            <p className="text-gray-500 text-xs font-light">
              5 Ingredients included
            </p>
          </div>
        </div>
        <button className="outline-none">
          <span className="material-symbols-outlined border-2 rounded-full p-1 font-bold text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
            add
          </span>
        </button>
      </div>
      <hr />
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {ingredients?.map((item, index) => (
            <div className="col-span-2 items-center flex gap-2" key={index}>
              <div>
                <div className="bg-orange-600 text-white rounded-full h-8 w-8 text-sm flex justify-center items-center font-medium">
                  {item?.quantity % parseInt(item?.quantity) === 0
                    ? parseInt(item?.quantity)
                    : item?.quantity}
                </div>
              </div>
              <h3 className="uppercase text-sm font-medium flex flex-wrap">
                {item?.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
