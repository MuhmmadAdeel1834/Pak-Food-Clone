import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Explore from "../../Components/ExploreMenu/Explore";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";
const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <div>
      <Header />
      <Explore category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
