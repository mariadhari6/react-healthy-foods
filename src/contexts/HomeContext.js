import { createContext, useState } from "react";

const HomeContext = () => {
  const FoodsContext = createContext({});
  const FoodsProvider = (props) => {
    const [foods, setFoods] = useState([]);
    const addFood = (food) => {
      setFoods((foods) => [...foods, food]);
    };
    const foodsContext = { foods, setFoods, addFood };
    return (
      <FoodsContext.Provider value={foodsContext}>
        {props.children}
      </FoodsContext.Provider>
    );
  };
  return {
    FoodsContext,
    FoodsProvider,
  };
};
export default HomeContext();
