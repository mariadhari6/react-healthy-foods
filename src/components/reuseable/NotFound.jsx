import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center h-screen absolute w-screen  top-0 justify-center">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex divide-x-2 gap-4 divide-y-2 divide-gray-300">
            <h1 className="text-5xl font-bold text-orange-600">404</h1>
            <span></span>
          </div>
          <div className="flex flex-col gap-8 relative">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold">Page not found</h1>
              <p className="font-medium text-gray-400">
                Please check the URL in the address bar and try again
              </p>
            </div>
            <div className="flex gap-2 absolute bottom-0 transform translate-y-16">
              <Link
                to="/"
                className="bg-orange-600 text-white px-4 text-sm py-2 rounded-md"
              >
                Go back home
              </Link>
              <a
                href="https://github.com/mariadhari6"
                className="text-orange-600 bg-orange-100 px-4 text-sm py-2 rounded-md"
              >
                Contact support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
