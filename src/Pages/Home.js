import React from "react";

import HeroSection from "./HeroSection/HeroSection";
import ExtraSections from "./ExtraSection/ExtraSections";
import AllCategories from "./AllCategories/AllCategories";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/Hooks";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
  const allCars = useLoaderData();
  
  useTitle('Home')

  //                                                         const {allCarss = []} = useQuery({
  //                                                         queryKey:['allCars'],
  //                                                         queryFn:()=> fetch('http://localhost:5000/allCars')
 //                                                         .then(res => res.json())
  //                                                         })
 




   
  return (
    <div>
      <HeroSection></HeroSection>
      <AllCategories allCars={allCars}></AllCategories>
      
      <ExtraSections></ExtraSections>
      
    </div>
  );
};

export default Home;
