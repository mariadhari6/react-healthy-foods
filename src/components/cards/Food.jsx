const Foods = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-7 my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
      <div className="bg-white border-gray-200 border-solid border-2 rounded-sm w-75">
        <img
          className="h-48 w-75 object-fill"
          src="https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          alt="Persian Chicken"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-center uppercase my-2">
            Persian Chicken
          </h1>
          <div className="h-1 w-16 bg-orange-500 rounded-full mx-auto  my-2"></div>
          <p className="text-sm text-gray-700 my-2 mx-5 capitalize">
            ground meat; bread crumbs; milk; egg; onion; garlic; parsley;
            oregano; salt; pepper; food contents label
          </p>
          <hr className="mt-2" />
          <button className="text-center bg-orange-600 text-white px-4 rounded-md py-1 mx-auto my-4 shadow-lg hover:shadow-orange-500/50">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Foods;
