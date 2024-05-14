import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const UpdateBlog = () => {
    const {user} = useAuth();
    const blogData = useLoaderData();
    const navigate = useNavigate();
    console.log(blogData);
    
    const { _id, email, title, image, category, short_description, long_description } = blogData;
    

    const handleAddBlog = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const updateBlog = {email, title, image, category, short_description, long_description };
        console.log(updateBlog);

        fetch(`http://localhost:5000/add_blog/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Updated',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  .then(() => {
                    // navigate after updating
                    navigate('/');
                  })
            }
        })


    }

    return (
        <div className="my-16">
            <h2 className="text-4xl font-bold text-center mb-8 text-black">Update Your Blog</h2>
            <div className="w-[90%] max-w-3xl mx-auto bg-[#e5e6e6] rounded-lg">
                <form onSubmit={handleAddBlog} className="card-body space-y-2 text-black">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="title" defaultValue={title} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="image url" defaultValue={image} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="mb-2 font-bold text-base" htmlFor="categ">Category</label>
                        <select name="category" id="categ" className="p-2 rounded-lg" defaultValue={category}>
                            <option value="history">history</option>
                            <option value="politics">politics</option>
                            <option value="economics">economics</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Short Description</span>
                        </label>
                        <textarea className="w-full p-4 rounded-lg" placeholder="short description" name="short_description" defaultValue={short_description} id="" cols="30"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-base">Long Description</span>
                        </label>
                        <textarea className="p-4 rounded-lg" placeholder="long description" name="long_description" defaultValue={long_description} id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white hover:text-black">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;