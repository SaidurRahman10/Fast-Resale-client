import React from 'react';
import { Link } from 'react-router-dom';





const Categories = ({car}) => {
    const { brand , _id , currentDate } = car;
   
   
    return (
        <div>
       <Link to={`allcar/${_id}`}><img className='h-36' src={brand} alt="" /></Link>
        </div>
    );
};

export default Categories;