import { useState } from "react";

const useNutrients = () => {
  const [labels, setLabels] = useState([]);
  const [nutrients, setNutients] = useState([]);
  const reset = () => {
    setLabels([]);
    setNutients([]);
  };
  const push = (label, value) => {
    setLabels((labels) => [...labels, label]);
    setNutients((nutrients) => [...nutrients, value]);
  };
  return [labels, nutrients, push, reset];
};
export default useNutrients;
