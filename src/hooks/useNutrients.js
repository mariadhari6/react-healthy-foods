import { useState } from "react"

const useNutrients = () => {
    const [labels, setLabels] = useState([])
    const [nutrients, setNutients] = useState([])
    const reset = () => {
        setLabels([])
        setNutients([])
    }
    const push = (label, value) => {
        setLabels(labels => [...labels, label])
        setNutients(nutrients => [...nutrients, value])
    }
    const remove = (index) => {
        setLabels((labels) => labels.filter((_, i) => i !== index))
        setNutients((nutrients) => nutrients.filter((_, i) => i !== index))
    }
    return [
        labels,
        nutrients,
        push,
        remove,
        reset
    ]
}
export default useNutrients