import { Link } from "react-router-dom";

const AllBlogs = ({ allBlogs }) => {
    const { _id, title, image, category, short_description, long_description } = allBlogs;

    return (
        <div className="card card-compact bg-base-100 shadow-2xl">
            <figure><img className="w-full h-[192px] object-cover" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <span className="w-[30%] text-center bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">{category}</span>
                {/* <p>{short_description}</p> */}
                {
                    short_description.length > 70 
                    ? <p>{short_description.slice(0, 70)} <span className="text-red-500"> see more.....</span></p>
                    : <p>{short_description}</p>
                }
                <div className="card-actions justify-end mt-2 gap-1">
                    <Link to={`/added_blog/${_id}`}>
                        <button className="btn bg-slate-700 hover:bg-white hover:text-black text-white">View Details</button>
                    </Link>
                    <button className="btn bg-green-600 hover:bg-white hover:text-green-600 text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;