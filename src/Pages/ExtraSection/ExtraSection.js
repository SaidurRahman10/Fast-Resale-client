import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';
import { PhoneIcon } from '@heroicons/react/24/solid';


const ExtraSection = ({ag}) => {
    return (
   <section className="bg-[#F3F4F6]   shadow-2xl  rounded-xl my-10">
  <div className="container mx-auto">
    <div className=" flex flex-wrap">
      <div className="w-full">
        <div className=" overflow-hidden rounded-lg bg-white">
        <PhotoProvider>
      <PhotoView src={ag.img}>
      <img  src={ag.img} className="w-96 h-96 mx-auto mt-5 rounded-2xl" alt="images" />
      </PhotoView>
    </PhotoProvider>
          
          <div className="p-8 text-start sm:p-9 md:p-7 xl:p-9 ml:20 ">
            <h3>
              <div
             
                className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
              {ag.name}
              </div>
            </h3>
            <div className="text-slate-500 mb-3 text-base leading-relaxed">

              <div className='flex gap-5'>
                <FaEnvelope className='mt-1'></FaEnvelope>
                {ag.email}
              </div>

              <div className='flex my-3 gap-5'>
                  <FaPhone className='mt-1'></FaPhone>
                  {ag.phone}
              </div>

              <div className='flex gap-5'>
                <FaFacebook className='mt-1'></FaFacebook>
                {ag.fb}
              </div>
            
             
            </div>
           
            
          </div>
        </div>
  
   
      
      </div>
    </div>
  </div>
</section>


       
    );
};

export default ExtraSection;