import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import HomeContext from "../contexts/HomeContext";
import { fetchFood } from "../controllers/HomeController";
const { FoodsContext } = HomeContext;
const AppBar = ({ setNextFoods }) => {
  const { setFoods, addFood } = useContext(FoodsContext);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFoods([]);
    fetchFood(query, addFood, null, setNextFoods);
    setQuery("");
  };
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 py-4 border-gray-100">
          <div className="flex justify-start">
            <Link
              to="/"
              className="outline-none flex justify-start items-center gap-1"
            >
              <img src={logo} className="h-8 w-auto sm:h-10" alt="" />
              <span>Foods Recipe</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </nav>
          <div className="relative shadow-sm">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search foods recipe ..."
                className="outline-none block w-full sm:text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </form>
            <button
              className="absolute inset-y-0 right-0 flex items-center"
              onClick={handleSubmit}
            >
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600"
              aria-expanded="false"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span className="material-symbols-outlined text-orange-600">
                      house
                    </span>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </Link>
                  <Link
                    to="/about"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span className="material-symbols-outlined text-orange-600">
                      info
                    </span>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      About
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AppBar;
