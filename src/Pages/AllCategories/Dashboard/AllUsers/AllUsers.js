import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Admin Successfully Makes.')
                refetch();
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl text-start underline font-bold my-4">All Users:</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th className='lg:px-8'></th>
        <th className='lg:px-8'>Name</th>
        <th className='lg:px-8'>Email</th>
        <th className='lg:px-8'>Role</th>
        <th className='lg:px-8'>Admin</th>
        <th className='lg:px-8'>Delete</th>
      </tr>
    </thead>
    <tbody className=''>
      {
        users.map((user, i) =><tr key={user._id}>
            <th className='lg:px-8'>{i+1}</th>
            <td className='lg:px-8' >{user.name}</td>
            <td className='lg:px-8' >{user.email}</td>
            <td  className='font-semibold  lg:px-8'>{user?.role ? 'admin' : 'Seller'}</td>
            <td className='lg:px-8' >{ user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs bg-teal-500 border-0'>Make Admin</button>}</td>
            <td className='lg:px-8'><button className='btn btn-xs bg-red-600 border-0'>Delete</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;