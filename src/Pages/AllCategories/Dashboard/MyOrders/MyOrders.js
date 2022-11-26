import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { myContext } from '../../../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(myContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = []} = useQuery({
        queryKey:['bookings',user?.email],
        queryFn: async()=> {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }

    })




    return (
        <div>
            <h3 className='text-3xl font-bold mt-3 underline text-start'>My Booking Items:</h3>
            <br />
            <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>

      
       {
        bookings.map((booking, i) =><tr key={booking?._id}>
            <th>{i+1}</th>
              <td><img className='w-14 h-14 rounded-full' src={booking?.allImage} alt="" /></td>
              <td>{booking?.carName.slice(0,25)}</td>
              <td>৳ {booking?.realPrice}</td>
              <td><button className='bg-green-500 rounded-xl text-white px-2'>Payment</button></td>
              <td></td>
              </tr> )
       }
       
       
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;