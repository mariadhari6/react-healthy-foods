const Info = () => {
  return (
    <div className="flex items-center absolute top-0 h-screen w-screen justify-center">
      <div className="max-w-md bg-white drop-shadow-md select-none rounded-sm p-4 flex flex-col gap-2">
        <h1 className="font-bold text-2xl">About</h1>
        <p className="text-gray-500 font-light">
          This is a website provided for free by the developer. This website can
          recommend various food recipes for you to try.
        </p>
      </div>
    </div>
  );
};
export default Info;
