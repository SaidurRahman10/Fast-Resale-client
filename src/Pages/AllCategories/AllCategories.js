import React from 'react';
import brand1 from '../../img/brand/toyota.png'
import brand2 from '../../img/brand/nissan.png'
import brand3 from '../../img/brand/BMW.png'
import { Link } from 'react-router-dom';
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