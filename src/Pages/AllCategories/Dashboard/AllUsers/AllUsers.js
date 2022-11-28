import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://frs-server-b68d.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://frs-server-b68d.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin Successfully Makes.");
          refetch();
        }
      });
  };
  const handleDeleteUser = (user) => {
    fetch(`https://frs-server-b68d.vercel.app/users/${user}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("User Delete successfully");
          refetch();
        }
      });
  };

  return (
    <div className="mx-10">
      <h2 className="text-3xl text-start underline font-bold my-4 text-white">
        All Users:
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="lg:px-6"></th>
              <th className="lg:px-6">Name</th>
              <th className="lg:px-6">Email</th>
              <th className="lg:px-6">Role</th>
              <th className="lg:px-6">Admin</th>
              <th className="lg:px-6">Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, i) => (
              <tr key={user._id}>
                <th className="lg:px-6">{i + 1}</th>
                <td className="lg:px-6">{user.name}</td>
                <td className="lg:px-6">{user.email}</td>
                <td className="font-semibold  lg:px-6">{user?.role}</td>
                <td className="lg:px-6">
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs bg-teal-500 border-0"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="lg:px-6">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-xs bg-red-600 border-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
