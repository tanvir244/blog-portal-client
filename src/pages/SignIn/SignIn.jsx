import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";

// react toastify
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const { signIn, googleLogin, githubLogin, setRealTimeUser } = useAuth();
    const [loginError, setLoginError] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // reset error
        setLoginError('');

        // login
        signIn(email, password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged in successfully",
                    showConfirmButton: false,
                    timer: 2000
                })
                    .then(() => {
                        // set realtime user 
                        setRealTimeUser(email);
                        console.log(email)
                        // reset form
                        form.reset();
                        // Navigate after login
                        navigate(location?.state ? location.state : '/');
                    })
            })
            .catch(() => {
                setLoginError('Your email or password incorrect, try again');
            })
    }

    // login by google 
    const loginByGoogle = () => {
        googleLogin()
        .then(result => {
            toast.success("Login successful with Google");
            // set realtime user
            const email = result.user.email;
            setRealTimeUser(email);
            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error.message)
        })
    }

    // login by github
    const loginByGithub = () => {
        githubLogin()
        .then((result) => {
            toast.success("Login successful with Github");
            // set realtime user
            const email = result.user.email;
            setRealTimeUser(email);
            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error.message);
        })
    }

    return (
        <div className="w-[90%] md:max-w-5xl mx-auto flex flex-col-reverse md:flex-row-reverse justify-around my-12 gap-4">
            <div className="w-full md:w-[55%] lg:w-[45%]">
                <h2 className="text-4xl font-bold text-center mb-6">Please Sign In</h2>
                <form onSubmit={handleSignIn} className="card-body bg-[#e5e6e6] rounded-xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white">Sign In</button>
                    </div>
                    {
                        loginError && <p className="text-red-500 font-semibold text-center">{loginError}</p>
                    }
                    <div className="px-4">
                        <h3 className="text-center border-b-2 pb-1 mt-3 mb-2 text-gray-700 font-semibold">Continue with</h3>
                        <button onClick={loginByGoogle} className="btn btn-outline w-full mb-2 text-lg font-bold">
                            <span className="text-xl font-bold"><FaGoogle /></span>
                            Google
                        </button>
                        <button onClick={loginByGithub} className="btn btn-outline w-full text-lg font-bold">
                            <span className="text-xl font-bold"><FaGithub /></span>
                            Github
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-[60%] mx-auto md:w-[30%] flex items-center">
                <img className="w-full" src="https://i.ibb.co/Yt2n4P5/Humaaans-Wireframe.png" alt="" />
            </div>
        </div>
    );
};

export default SignIn;