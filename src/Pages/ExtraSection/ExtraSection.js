import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ExtraSection = () => {
    return (
        <div>

           
            
            <div className='mt-12'>

            <section className="bg-[#F3F4F6]   shadow-sm">
  <div className="container mx-auto">
    <div className=" flex flex-wrap">
      <div className="w-full ">
        <div className=" overflow-hidden rounded-lg bg-white">
        <PhotoProvider>
      <PhotoView src=''>
      <img src='' className="w-full" alt="images" />
      </PhotoView>
    </PhotoProvider>
          
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <div
             
                className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
              Gggggggggggggggggggggggggggggggggg
              </div>
            </h3>
            <p className="text-slate-500 mb-3 text-base leading-relaxed">
           ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            </p>
            <div className='font-bold text-xl mb-5'>Tour Price: $100</div>
            <Link to=''
          
              className="text-white  hover:bg-transparent inline-block rounded-full border hover:border-teal-500 bg-teal-500 py-2 px-7 text-base font-medium transition hover:text-teal-500 "
            >
              View Details
            </Link>
          </div>
        </div>
  
   
      
      </div>
    </div>
  </div>
</section>

            </div>
        </div>
    );
};

export default ExtraSection;