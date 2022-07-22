import Food from "./cards/Food";
import HomeContext from "../contexts/HomeContext";
import React, { useContext, useState } from "react";
import { fetchNextFood } from "../controllers/HomeController";
const { FoodsContext } = HomeContext;
const Foods = ({ nextFoods, setNextFoods }) => {
  const { foods, addFood } = useContext(FoodsContext);
  const [loading, setLoading] = useState(false);
  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-7 my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {foods?.map((item, index) => (
          <Food
            healthLabels={item?.healthLabels}
            label={item?.label}
            key={index}
            image={item?.image}
            foodId={item?.foodId}
          />
        ))}
      </div>
      {foods.length === 0 && (
        <div className="flex justify-center items-center h-96">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {foods.length > 0 && !loading && (
        <div className="flex justify-center items-center">
          <button
            className="text-center bg-orange-600 text-white px-4 rounded-md py-1 mx-auto my-4 shadow-lg hover:shadow-orange-500/50"
            onClick={() =>
              fetchNextFood(nextFoods, addFood, setLoading, setNextFoods)
            }
          >
            Load More
          </button>
        </div>
      )}
    </React.Fragment>
  );
};
export default Foods;
