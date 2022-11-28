import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { myContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(myContext);

  const url = `https://frs-server-b68d.vercel.app/bookings?email=${user?.email}`;

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (bookings) => {
    const agree = window.confirm(`Are you sure you want to this Item`);

    if (agree) {
      fetch(`https://frs-server-b68d.vercel.app/bookings/${bookings}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Delete Confirm");
          refetch();
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mx-10">
      <h3 className="text-3xl font-bold mt-3 underline text-start text-white">
        My Booking Items:
      </h3>
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
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings
              ? bookings?.map((booking, i) => (
                  <tr key={booking?._id}>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        className="w-14 h-14 rounded-full"
                        src={booking?.allImage}
                        alt=""
                      />
                    </td>
                    <td>{booking?.carName.slice(0, 25)}</td>
                    <td>৳ {booking?.realPrice}</td>
                    <td>
                      <button className="bg-green-500 rounded-xl text-white px-2">
                        Payment
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="bg-red-500 rounded-xl text-white px-2"
                      >
                        Delete
                      </button>
                    </td>
                    <td></td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
