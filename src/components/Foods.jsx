import Food from "./cards/Food";
import HomeContext from "../contexts/HomeContext";
import { useContext } from "react";
const { FoodsContext } = HomeContext;
const Foods = () => {
  const { foods } = useContext(FoodsContext);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-7 my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {foods?.map((item, index) => (
        <Food
          category={item?.category}
          foodContentsLabel={item?.foodContentsLabel}
          label={item?.label}
          key={index}
        />
      ))}
    </div>
  );
};
export default Foods;
