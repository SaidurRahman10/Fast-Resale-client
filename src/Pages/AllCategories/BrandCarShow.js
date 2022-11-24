import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const BrandCarShow = () => {
    const {allcar} = useLoaderData()
  
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-7 my-10  mx-10 '>
            {
                allcar.map(car=> <section className="bg-[#F3F4F6]   shadow-sm">
                <div className="container mx-auto shadow-2xl">
                  <div className=" flex flex-wrap">
                    <div className="w-full ">
                      <div className=" overflow-hidden rounded-lg bg-white">
                      <PhotoProvider>
                    <PhotoView src={car.img}>
                    <img src={car.img} className="w-full h-96" alt="images" />
                    </PhotoView>
                  </PhotoProvider>
                        
                        <div className="p-8 text-start sm:p-9 md:p-7 xl:p-9">
                          <h3>
                            <div
                           
                              className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                            >
                            {car.name}
                            </div>
                          </h3>
                          <p className="text-slate-500 mb-3 text-base leading-relaxed">
                           Model: {car.modelYear} <br />
                           Used Time: {car.usedTime} Years<br />
                           Category: {car.category} <br />
                           Mileage: {car.mileage} km <br />
                           PickUp Location: {car.location}
                          <div className='font-thin text-lg font-semibold  '>Original Price: $<span className='line-through'> {car.price}</span> </div>
                          </p>
                          <div className=' text-xl font-bold mb-5 '>Resale Price: $<span className=''> {car.resalePrice}</span> </div>
                          <Link to=''
                        
                            className="text-white  w-full text-center hover:bg-transparent inline-block rounded-full border hover:border-red-500 bg-red-500 py-2  text-base font-medium transition hover:text-red-500 "
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                
                 
                    
                    </div>
                  </div>
                </div>
              </section>)
            }
        </div>
    );
};

export default BrandCarShow;