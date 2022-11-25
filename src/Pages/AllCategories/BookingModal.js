import React, { useContext } from "react";
import { myContext } from "../../Context/AuthProvider";

const BookingModal = ({ selectCar,setSelectCar }) => {
    const {user, updateUser} = useContext(myContext)
    
  const { name: carName , resalePrice } = selectCar;

  console.log(user);

  const handleBooking = (event) =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const carName = form.carName.value;
    const realPrice = form.realPrice.value;
    const phone = form.phone.value;
    const message = form.message.value;
  

    const booking = {
      name,
      email,
      carName,
      realPrice,
      phone,
      message
  
    } 
     console.log(booking);
     setSelectCar(null)
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{carName}</h3>
          <h3 className="text-lg font-bold">Price: $ {resalePrice}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="carName" type="carName" disabled value={carName} className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="realPrice" type="text" disabled value={resalePrice} className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    
                        <textarea name="message" className="textarea textarea-bordered" placeholder="Meeting Location"></textarea>
                        <input className='btn bg-red-500 border-0 w-full ' type="submit" value="Submit" />
                    </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
