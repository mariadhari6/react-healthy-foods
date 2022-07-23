import Chart from "react-apexcharts";
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
const NutrientsChart = () => {
  return <Chart options={options} series={series} type="donut" width="100%" />;
};
export default NutrientsChart;
