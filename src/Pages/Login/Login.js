import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { myContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/Hooks';



const Login = () => {
    useTitle('Login')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {  googleSignIn,logIn } = useContext(myContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const provider= new GoogleAuthProvider();
    
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace:true})
                setLoginUserEmail(data.email);
                toast.success('Login Successfully Completed')
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
        }
        const handelGoogleSignIn = () => {
            googleSignIn(provider)
              .then((result) => {
                const user = result.user;
                navigate(from,{replace:true})
                console.log(user);
                toast.success('Login Successfully Completed')
              })
              .catch((error) => {
                console.error(error);
                setLoginError(error.message);
              });
          };


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className='text-3xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn border-0 hover:bg-transparent hover:text-red-600 hover:border hover:border-red-600 bg-red-600 w-full mt-4' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='text-sm text-start mt-3'>New in this page?<Link className='text-secondary' to="/signup"> Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handelGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;