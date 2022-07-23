import Chart from "react-apexcharts";
const labels = [
  "Carbohydrate",
  "Sodium",
  "Calcium",
  "Total Fat",
  "Iron",
  "Protein",
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
  show: true,
  showForSingleSeries: false,
  showForNullSeries: true,
  showForZeroSeries: true,
  position: "bottom",
  horizontalAlign: "center",
  floating: false,
  fontFamily: "Helvetica, Arial",
  fontWeight: 400,
  formatter: function (seriesName, opts) {
    let totals = 0;
    opts.w.globals.series.forEach((serie) => {
      totals += serie;
    });
    return [
      `<h1 style="font-size: 1.2rem; font-weight: bold;">${(
        (opts.w.globals.series[opts.seriesIndex] * 100) /
        totals
      ).toFixed(1)} %</h1>`,
      seriesName,
    ];
  },
  inverseOrder: false,
  width: undefined,
  height: undefined,
  tooltipHoverFormatter: undefined,
  customLegendItems: [],
  offsetX: 0,
  offsetY: 0,
  labels: {
    colors: undefined,
    useSeriesColors: false,
  },
  markers: {
    width: 12,
    height: 12,
    strokeWidth: 0,
    strokeColor: "#fff",
    fillColors: undefined,
    radius: 12,
    customHTML: undefined,
    onClick: undefined,
    offsetX: -5,
    offsetY: -8,
  },
  itemMargin: {
    horizontal: 15,
    vertical: 10,
  },
};
const options = {
  labels,
  dataLabels,
  legend,
};
const series = [100, 200, 201, 50, 70, 45];
const NutrientsChart = () => {
  return <Chart options={options} series={series} type="donut" />;
};
export default NutrientsChart;
