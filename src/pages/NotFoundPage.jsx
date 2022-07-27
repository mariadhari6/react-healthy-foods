import React, { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Loading from "../components/reuseable/Loading";
import NotFound from "../components/reuseable/NotFound";

const NotFoundPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <React.Fragment>
      <AppBar />
      {loading ? (
        <div className="flex items-center absolute w-screen h-screen top-0 justify-center">
          <Loading />
        </div>
      ) : (
        <NotFound />
      )}
    </React.Fragment>
  );
};
export default NotFoundPage;
