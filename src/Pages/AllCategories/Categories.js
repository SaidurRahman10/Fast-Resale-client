import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({car}) => {
    const { brand , _id} = car;
    return (
        <div className=''>
       <Link to={`${_id}`}><img className='h-36' src={brand} alt="" /></Link>
        </div>
    );
};

export default Categories;