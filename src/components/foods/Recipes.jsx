/* eslint-disable jsx-a11y/img-redundant-alt */
import DetailRecipe from "../cards/DetailRecipe";
import FoodImage from "../cards/FoodImage";
import Ingredients from "../cards/Ingredients";
import NutrientsChart from "../charts/NutrientsChart";

const Recipes = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 gap-7 sm:px-6 my-7 grid grid-cols-1 md:grid-cols-11">
      <div className="md:col-span-6 col-span-1 relative rounded-md">
        <FoodImage />
      </div>
      <div className="md:col-span-5 col-span-1">
        <div className="rounded-md drop-shadow-md shadow-sm bg-white">
          <div className="flex justify-between p-3">
            <h1>Total Nutrients</h1>
            <button className="outline-none">. . .</button>
          </div>
          <hr />
          <NutrientsChart />
        </div>
      </div>
      <div className="col-span-1 md:col-span-5">
        <Ingredients />
      </div>
      <div className="col-span-1 md:col-span-6">
        <DetailRecipe />
      </div>
    </div>
  );
};
export default Recipes;
