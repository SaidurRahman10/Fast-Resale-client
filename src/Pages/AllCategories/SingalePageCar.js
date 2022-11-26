import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../Hooks/Hooks';


const SingalePageCar = ({car,setSelectCar}) => {
    const {img,name,description,curentDate, modelYear,usedTime,category,mileage,location,price,resalePrice} = car;
    useTitle(`${name}`)
    
    return (
        <section className="bg-[#F3F4F6]   shadow-sm">
        <div className="container mx-auto shadow-2xl">
          <div className=" flex flex-wrap">
            <div className="w-full ">
              <div className=" overflow-hidden rounded-lg bg-white">
              <PhotoProvider>
            <PhotoView src={img}>
            <img src={img} className="w-full h-96" alt="images" />
            </PhotoView>
          </PhotoProvider>
          
                
                <div className="p-8 text-start sm:p-9 md:p-7 xl:p-9">
                      <p className='text-black text-xs  '>{curentDate}</p>
                  <h3>
                    <div
                   
                      className="text-dark hover:text-primary  block text-xl font-semibold my-4 sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                    {name}
                    </div>
                  </h3>

                  <p className='font-mono mb-4 font-bold'>{description}</p>
                  <p className="text-slate-500 mb-3 text-base leading-relaxed">
                   Model: {modelYear} <br />
                   Used Time: {usedTime} Years<br />
                   Category: {category} <br />
                   Mileage: {mileage} km <br />
                   PickUp Location: {location}
                  <div className='font-thin text-lg font-semibold  '>Original Price: ৳<span className='line-through'> {price}</span> </div>
                  </p>
                  <div className=' text-xl font-bold mb-5 '>Resale Price: ৳<span className=''> {resalePrice}</span> </div>
       
                 
                 
<label 
onClick={()=> setSelectCar(car)}
htmlFor="booking-modal" className="btn text-white  w-full text-center border-0 hover:bg-transparent rounded-2xl hover:border hover:border-red-500 bg-red-500 py-2  text-base font-medium transition hover:text-red-500">Booking Modal</label>





                   
                  
                </div>
              </div>
        
         
            
            </div>
          </div>
        </div>
       
      </section>
    );
};

export default SingalePageCar;