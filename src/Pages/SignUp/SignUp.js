import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/Hooks";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  useTitle('SignUp')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, googleSignIn, updateUser } = useContext(myContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail)
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  if(token){
    navigate('/')
  }


  const handleSignUp = (data) => {
    // console.log(data?.name,"T am here");

    setSignUPError('');
    createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully.')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() => {
                saveUser(data.name, data.email)
                })
                .catch(err => console.log(err));
        })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });

  };

  const saveUser = (name, email) =>{
    const user ={name,email}
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCreatedUserEmail(email)
   
    })

  }
  

  const handelGoogleSignIn = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/')
        toast.success("User Create Successfully");
      })
      .catch((error) => {
        console.error(error);
        setSignUPError(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 shadow-2xl rounded-lg">
        <h2 className="text-3xl text-center font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn border-0 hover:bg-transparent hover:text-red-600 hover:border hover:border-red-600 bg-red-600 w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="text-sm text-start mt-3">
          Already have an account{" "}
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handelGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
