import React from "react";
import AppBar from "../components/AppBar";
import Foods from "../components/cards/Food";

const Home = () => {
  return (
    <React.Fragment>
      <AppBar />
      <Foods />
    </React.Fragment>
  );
};
export default Home;
