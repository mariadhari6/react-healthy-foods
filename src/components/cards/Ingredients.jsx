const Ingredients = () => {
  return (
    <div className="bg-white shadow-sm drop-shadow-sm rounded-md">
      <div className="flex justify-between p-3 px-4">
        <div className="flex gap-2 items-center">
          <span className="material-symbols-outlined text-gray-500 text-3xl">
            restaurant
          </span>
          <div>
            <h1 className="font-bold uppercase">Ingredients:</h1>
            <p className="text-gray-500 text-xs font-light">
              5 Ingredients included
            </p>
          </div>
        </div>
        <button className="outline-none">
          <span className="material-symbols-outlined border-2 rounded-full p-1 font-bold text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
            add
          </span>
        </button>
      </div>
      <hr />
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="col-span-2 flex items-center gap-2">
            <div className="bg-orange-600 text-white rounded-full h-8 w-8 flex justify-center items-center font-medium">
              1
            </div>
            <h3 className="uppercase text-sm font-medium flex flex-wrap">
              250gr of fresh salmon
            </h3>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <div className="bg-orange-600 text-white rounded-full h-8 w-8 flex justify-center items-center font-medium">
              3
            </div>
            <h3 className="uppercase text-sm font-medium flex flex-wrap">
              cup fresh orange juice
            </h3>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <div className="bg-orange-600 text-white rounded-full h-8 w-8 flex justify-center items-center font-medium">
              1
            </div>
            <h3 className="uppercase text-sm font-medium flex flex-wrap">
              250gr of fresh salmon
            </h3>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <div className="bg-orange-600 text-white rounded-full h-8 w-8 flex justify-center items-center font-medium">
              3
            </div>
            <h3 className="uppercase text-sm font-medium flex flex-wrap">
              cup fresh orange juice
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
