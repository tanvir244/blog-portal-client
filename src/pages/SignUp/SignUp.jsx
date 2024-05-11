import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [registerError, setRegisterErr] = useState([]);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        if (password.length < 6) {
            setRegisterErr('Password should be at least 6 character or longer!');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterErr('Password should have at least one Uppercase cahracter!');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterErr('Password should have at least one Lowercase character!');
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setRegisterErr('Password should have at least one Number');
            return;
        }

        // reset error 
        setRegisterErr('');

        // create user
        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your registration successfull",
                    showConfirmButton: false,
                    timer: 2000
                  })
                  .then(() => {
                    form.reset();
                    navigate('/');
                  })
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div className="w-[90%] md:max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-around my-12 gap-4">
            <div className="w-full md:w-[55%] lg:w-[45%]">
                <h2 className="text-4xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSignUp} className="card-body bg-[#e5e6e6] rounded-xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo url" className="input input-bordered" required />
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
                        <button className="btn bg-black text-white">Sign Up</button>
                    </div>
                    {
                        registerError && <p className="text-red-500 font-semibold text-center">{registerError}</p>
                    }
                    <p className="mt-6">Already have an account? <Link className="text-green-500 font-bold" to='/login'>Login Now</Link></p>
                </form>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
                <img className="w-full" src="https://i.ibb.co/JmPK2xm/Humaaans-3-Characters.png" alt="" />
            </div>
        </div>
    );
};

export default SignUp;