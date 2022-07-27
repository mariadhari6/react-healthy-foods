import { useContext, useEffect } from "react";
import Chart from "react-apexcharts";
import FoodContext from "../../contexts/FoodContext";
import useNutrients from "../../hooks/useNutrients";
const labels = [
  "Carbohydrate",
  "Sodium",
  "Calcium",
  "Total Fat",
  "Iron",
  "Protein",
  "Vit B",
  "Vit C",
  "Vit D",
  "Vit E",
  "Vit A",
];
const dataLabels = {
  enabled: true,
  enabledOnSeries: undefined,
  textAnchor: "middle",
  distributed: false,
  offsetX: 0,
  offsetY: 0,
  style: {
    fontSize: "14px",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: "bold",
    colors: undefined,
  },
  background: {
    enabled: true,
    foreColor: "#fff",
    padding: 4,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    opacity: 0.9,
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 1,
      color: "#000",
      opacity: 0.45,
    },
  },
  dropShadow: {
    enabled: false,
    top: 1,
    left: 1,
    blur: 1,
    color: "#000",
    opacity: 0.45,
  },
};
const legend = {
  fontSize: "14px",
};
const options = {
  labels,
  dataLabels,
  legend,
};
const series = [100, 200, 201, 50, 70, 45, 10, 20, 30, 40, 50];
const { RecipeContext } = FoodContext;
const acceptedUnits = ["mg", "µg", "g"];
const NutrientsChart = () => {
  const { recipe } = useContext(RecipeContext);
  const [labels, nutrients, push, remove, reset] = useNutrients();
  useEffect(() => {
    reset()
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
        if (nutrient.quantity > 0) {
          push(nutrient.label, nutrient.quantity)
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe?.totalNutrients]);
  useEffect(() => {
    options.labels = labels
  }, [nutrients, labels])
  return <Chart options={options} series={nutrients} type="donut" width="100%" />;
};
export default NutrientsChart;
