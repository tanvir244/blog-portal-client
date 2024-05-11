
const SignUp = () => {
    return (
        <div className="w-[90%] md:max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-around my-12 gap-4">
            <div className="w-full md:w-[55%] lg:w-[45%]">
            <h2 className="text-4xl font-bold text-center mb-6">Sign Up</h2>
            <form className="card-body bg-[#e5e6e6] rounded-xl">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Your Name</span>
                    </label>
                    <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input type="email" placeholder="Enter email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Enter photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-black text-white">Sign Up</button>
                </div>
            </form>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
                <img className="w-full" src="https://i.ibb.co/JmPK2xm/Humaaans-3-Characters.png" alt="" />
            </div>
        </div>
    );
};

export default SignUp;