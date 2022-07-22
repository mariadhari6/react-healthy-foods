import Food from "./cards/Food";
import HomeContext from "../contexts/HomeContext";
import React, { useContext } from "react";
const { FoodsContext } = HomeContext;
const Foods = () => {
  const { foods } = useContext(FoodsContext);
  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-7 my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {foods?.map((item, index) => (
          <Food
            healthLabels={item?.healthLabels}
            label={item?.label}
            key={index}
            image={item?.image}
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
    </React.Fragment>
  );
};
export default Foods;
