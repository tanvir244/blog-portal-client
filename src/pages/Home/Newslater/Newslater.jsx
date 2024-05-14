import { toast } from "react-toastify";

const Newslater = () => {

    const handleNewslater = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        if(email){
            toast.success('Thank you for subscribing to our newsletter');
        }
    }

    return (
        <div className="w-full mx-auto bg-[#2b3440] my-24 py-16 px-4 md:px-38 lg:px-72 rounded-lg">
            <h1 className="text-white text-4xl text-center mb-2">News for Later</h1>
            <form onSubmit={handleNewslater} className="card-body">
                <div className="form-control">
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                </div>
                <div className="form-control w-36 mx-auto mt-6">
                <input type="submit" value="Submit" className="bg-white p-3 rounded-lg btn" />
                </div>
            </form>
        </div>
    );
};

export default Newslater;