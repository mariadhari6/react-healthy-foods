import React, { useContext, useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import { fetchFood, getRandomIngredient } from "../controllers/HomeController";
import HomeContext from "../contexts/HomeContext";
import Foods from "../components/Foods";
const { FoodsContext } = HomeContext;
const Home = () => {
  const { addFood, setFoods } = useContext(FoodsContext);
  const [nextFoods, setNextFoods] = useState("");
  useEffect(() => {
    setFoods([]);
    fetchFood(getRandomIngredient(), addFood, false, setNextFoods);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(nextFoods);
  }, [nextFoods]);
  return (
    <React.Fragment>
      <AppBar setNextFoods={setNextFoods} />
      <Foods nextFoods={nextFoods} setNextFoods={setNextFoods} />
    </React.Fragment>
  );
};
export default Home;
