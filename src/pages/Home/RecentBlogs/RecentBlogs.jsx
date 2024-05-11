import { Link } from "react-router-dom";

const RecentBlogs = ({ recentBlog }) => {
    const { _id, title, short_description, category, image_url } = recentBlog;

    return (
        <div className="card bg-base-100 shadow-2xl">
            <figure><img className="w-full h-[248px] object-cover" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <span className="w-[28%] text-center bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">{category}</span>
                <p>{short_description}</p>
                <div className="card-actions justify-end mt-2 gap-2">
                    <Link to={`/recent_blogs/${_id}`}>
                        <button className="btn bg-slate-700 hover:bg-white hover:text-black text-white">View Details</button>
                    </Link>
                    <button className="btn bg-green-600 hover:bg-white hover:text-green-600 text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;