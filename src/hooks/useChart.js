import { useState } from "react"
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
const useChart = () => {
    const [options, setOptions] = useState({
        labels: [],
        dataLabels,
        legend
    })
    const setLabels = (labels) =>{
        setOptions(prevOptions => {
            return {
                ...prevOptions,
                labels: labels
            }
        })
    }
    return [
        options,
        setLabels
    ]
}
export default useChart