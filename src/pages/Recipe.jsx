import React from "react";
import AppBar from "../components/AppBar";
import NutrientsChart from "../components/charts/NutrientsChart";
const Recipe = () => {
  return (
    <React.Fragment>
      <AppBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 my-7 grid grid-cols-1 md:grid-cols-11">
        <div className="md:col-span-6 col-span-1"></div>
        <div className="md:col-span-5 col-span-1 rounded-md drop-shadow-md shadow-sm bg-white">
          <div className="flex justify-between m-4">
            <h1>Total Nutrients</h1>
            <button>Detail</button>
          </div>
          <hr />
          <NutrientsChart />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Recipe;
