import { Link } from "react-router-dom";

const Food = ({ label, healthLabels, image, foodId }) => {
  return (
    <div className="bg-white border-gray-200 border-solid border-2 rounded-sm w-75 flex flex-col justify-between">
      <img className="h-48 w-75 object-none" src={image} alt={label} />
      <div className="flex flex-col">
        <h1 className="text-lg font-bold text-center capitalize my-2 px-2">
          {label}
        </h1>
        <div className="h-1 w-16 bg-orange-500 rounded-full mx-auto  my-2"></div>
        <p className="text-sm text-gray-700 my-2 mx-5 capitalize text-center">
          {healthLabels[0]}
        </p>
      </div>
      <div className="text-center">
        <hr className="mt-2" />
        <Link to={`/foods/recipe/${foodId}`}>
          <button className="text-center bg-orange-600 text-white px-4 rounded-md py-1 mx-auto my-4 shadow-lg hover:shadow-orange-500/50">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Food;
