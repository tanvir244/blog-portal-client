
const SignIn = () => {
    return (
        <div className="w-[90%] md:max-w-5xl mx-auto flex flex-col-reverse md:flex-row-reverse justify-around my-12 gap-4">
            <div className="w-full md:w-[55%] lg:w-[45%]">
            <h2 className="text-4xl font-bold text-center mb-6">Please Sign In</h2>
            <form className="card-body bg-[#e5e6e6] rounded-xl">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input type="email" placeholder="Enter email" className="input input-bordered" required />
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
                    <button className="btn bg-black text-white">Sign In</button>
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