
const AddBlog = () => {

    

    return (
        <div className="w-[90%] max-w-3xl mx-auto bg-[#e5e6e6] my-16 rounded-lg">
            <form className="card-body space-y-2 text-black">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-base">Title</span>
                    </label>
                    <input type="text" placeholder="title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-base">Image URL</span>
                    </label>
                    <input type="text" placeholder="image url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="mb-2 font-bold text-base" htmlFor="categ">Category</label>
                    <select name="" id="categ" className="p-2 rounded-lg">
                            <option value="history">history</option>
                            <option value="politics">politics</option>
                            <option value="economics">economics</option>
                        </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-base">Short Description</span>
                    </label>
                    <textarea className="w-full p-4 rounded-lg" placeholder="short description" name="" id="" cols="30"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-base">Long Description</span>
                    </label>
                    <textarea className="p-4 rounded-lg" placeholder="long description" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-black text-white">Add Blog</button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;