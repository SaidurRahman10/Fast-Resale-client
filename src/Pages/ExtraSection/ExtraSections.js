import React from 'react';
import avatar1 from '../../img/avatar/avatar-1.jpg'
import avatar2 from '../../img/avatar/avatar-3.jpg'
import avatar3 from '../../img/avatar/avatar-13.jpg'


const ExtraSections = () => {
 
    const agent =[
        {
            id: 1,
            name: 'Carolyn Stone',
            email: 'stone@gmail.com',
            img: avatar1,
            phone:'+8801565454',
            fb:'fb/carloyen.com'
          
        },
        {
            id: 2,
            name: 'Martin Smith',
            email: 'martin@gmail.com',
            img: avatar2,
            phone:'+88546554454',
            fb:'fb/martin.com'
          
        },
        {
            id: 3,
            name: 'Sabbir Khan',
            email: 'sabbir@gmail.com',
            img: avatar3,
            phone:'+880564656',
            fb:'fb/sabbir.com'
          
        }
    ]
    return (
        <div>
             <h1 className='text-center text-4xl font-bold'>OUR AGENT</h1>
            <p className='text-center text-xl text-slate-600 '>Our agents are expert on their work and they work very hardly every project</p>
            <div className="grid grid-cols-1 lg:grid-cols-3">


 </div>
        </div>
    );
};

export default ExtraSections;