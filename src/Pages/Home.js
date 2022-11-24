import React from "react";

import HeroSection from "./HeroSection/HeroSection";
import ExtraSections from "./ExtraSection/ExtraSections";
import AllCategories from "./AllCategories/AllCategories";
import { useLoaderData } from "react-router-dom";


const Home = () => {
  const allCars = useLoaderData();
  
 




   
  return (
    <div>
      <HeroSection></HeroSection>
      <AllCategories allCars={allCars}></AllCategories>
      
      <ExtraSections></ExtraSections>
      
    </div>
  );
};

export default Home;
