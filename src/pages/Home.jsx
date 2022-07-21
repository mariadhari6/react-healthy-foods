import React, { useContext, useEffect } from "react";
import AppBar from "../components/AppBar";
import { fetchFood, getRandomIngredient } from "../controllers/HomeController";
import HomeContext from "../contexts/HomeContext";
import Foods from "../components/Foods";
const { FoodsContext } = HomeContext;
const Home = () => {
  const { foods, addFood, setFoods } = useContext(FoodsContext);

  useEffect(() => {
    setFoods([]);
    fetchFood(getRandomIngredient(), addFood);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(foods);
  }, [foods]);
  return (
    <React.Fragment>
      <AppBar />
      <Foods />
    </React.Fragment>
  );
};
export default Home;
