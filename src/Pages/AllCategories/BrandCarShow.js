import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { myContext } from "../../Context/AuthProvider";
import Loading from "../Loading/Loading";
import BookingModal from "./BookingModal";
import SingalePageCar from "./SingalePageCar";

const BrandCarShow = () => {
  const { allcar } = useLoaderData();
  const [selectCar, setSelectCar] = useState(null);
  const {user, loading} = useContext(myContext)

  if(loading){
   return <Loading></Loading>
  }




  
  

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 my-10  mx-10 ">
      {allcar.map((car) => (
        <SingalePageCar key={car.id} car={car} setSelectCar={setSelectCar}>
         
        </SingalePageCar>
      ))}
     {  selectCar &&
     <BookingModal selectCar={selectCar} setSelectCar={setSelectCar}></BookingModal>}
    </div>
  );
};

export default BrandCarShow;
