import React from 'react';

import Categories from './Categories';


const AllCategories = ({allCars}) => {
    const cars = allCars;
    // console.log(allCars[0].nissancar);
 

    
   

  
    return (
       
        <div className='bg-slate-400 h-44 flex justify-center gap-24 items-center'>
            {
                cars.map(car=> <Categories key={car._id} car={car}></Categories>)
            }
              
        </div>
    );
};

export default AllCategories;