import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Loading from "../../../Loading/Loading";

const MyProduct = () => {
  const { data: product = [], refetch , isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/product");
      const data = await res.json();
      return data;
    },
  });
  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="mx-10 my-10">
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {product.map((categoriy, i) => (
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-80" src={categoriy.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {categoriy.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-slate-500 mb-3 text-base leading-relaxed text-start">
                   Model: {categoriy.sellerName} <br />
                   Used Time: {categoriy.usedTime} Years<br />
                  
                 
                   PickUp Location: {categoriy.location}
                  <div className='font-thin text-lg font-semibold  '>Original Price: ৳<span className='line-through'> {categoriy.price}</span> </div>
                <h1 className="mt-2 font-bold text-2xl text-black"> Resale Price:  ৳ {categoriy.resalePrice}</h1>
                  </p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
