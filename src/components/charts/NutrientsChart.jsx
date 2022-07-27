import { useContext, useEffect } from "react";
import Chart from "react-apexcharts";
import FoodContext from "../../contexts/FoodContext";
import useChart from "../../hooks/useChart";
import useNutrients from "../../hooks/useNutrients";

const { RecipeContext } = FoodContext;
const acceptedUnits = ["mg", "µg", "g"];
const NutrientsChart = () => {
  const { recipe } = useContext(RecipeContext);
  const [options, setLabels] = useChart();
  const [labels, nutrients, push, reset] = useNutrients();
  useEffect(() => {
    reset();
    const totalNutrients = Object.values(recipe?.totalNutrients);
    totalNutrients.forEach((nutrient) => {
      if (acceptedUnits.includes(nutrient.unit)) {
        if (nutrient.unit === "µg") {
          nutrient.unit = "g";
          nutrient.quantity /= 1000000;
        } else if (nutrient.unit === "mg") {
          nutrient.unit = "g";
          nutrient.quantity /= 1000;
        }
        if (nutrient.quantity >= 1) {
          push(nutrient.label, nutrient.quantity);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe?.totalNutrients]);
  useEffect(() => {
    setLabels(labels);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labels]);
  return (
    <Chart options={options} series={nutrients} type="donut" width="100%" />
  );
};
export default NutrientsChart;
