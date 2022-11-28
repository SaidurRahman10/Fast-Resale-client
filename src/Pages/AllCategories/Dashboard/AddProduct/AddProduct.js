import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Loading/Loading";

const AddProduct = () => {
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_KEY;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            name: data.name,
            sellerName: data.sellerName,
            categorie: data.categorie,
            location: data.location,
            mobile: data.mobile,
            price: data.originalPrice,
            resalePrice: data.resalePrice,
            usedTime: data.yearOfUse,
            img: imgData.data.url,
            category:data.category,
          };

          //save product

          fetch("https://frs-server-b68d.vercel.app/allcars", {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("Product Added");
              console.log(result);
            });
          fetch("https://frs-server-b68d.vercel.app/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              navigate("/dashboard/myproduct");
            });
        }
      });
  };

  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        "https://frs-server-b68d.vercel.app/allCarsSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-5/6 mx-auto p-7  ">
      <h2 className="text-4xl text-start text-white">Add Product</h2>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-white">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("sellerName", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.sellerName && (
            <p className="text-red-500">{errors.sellerName.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-white">Condition</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("category", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-white">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Product Name"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-white">Select Categorie</span>
          </label>
          <select
            {...register("categorie")}
            className="input input-bordered w-full max-w-xs"
          >
            {categories?.map((categorie) => (
              <option key={categorie._id} value={categorie._id}>
                {categorie.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-white">Location</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Location"
            {...register("location", {
              required: "location is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-white">Original Price</span>
          </label>
          <input
            type="text"
            placeholder="Enter Original Price"
            {...register("originalPrice", {
              required: "Price is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.originalPrice && (
            <p className="text-red-500">{errors.originalPrice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-white">Re-sell Price</span>
          </label>
          <input
            type="text"
            placeholder="Enter Re-sell Price"
            {...register("resalePrice", {
              required: "Price is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.resalePrice && (
            <p className="text-red-500">{errors.resalePrice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-white">
              How many year you use it?
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Uses years"
            {...register("yearOfUse", {
              required: "year is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.yearOfUse && (
            <p className="text-red-500">{errors.yearOfUse.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-white">Mobile</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            {...register("mobile", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.mobile && (
            <p className="text-red-500">{errors.mobile.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            {" "}
            <span className="label-text text-white">Image</span>
          </label>
          <input
            type="file"
            {...register("img", {
              required: "Image is Required",
            })}
            className="input w-full max-w-xs bg-transparent text-white"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>

        <div className="col-span-2 text-center mt-8">
          <input
            className="btn bg-red-500 border-0 mt-4  w-96 "
            value="Add Item"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
