import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const RecentBlogs = ({ recentBlog }) => {
    const { user } = useAuth();
    const [expectedWishlistData, setExpectedWishlistData] = useState([]);
    const { _id, title, short_description, detail_description, category, image_url } = recentBlog;
    // console.log(recentBlog);

    useEffect(() => {
        if (user && user.email) {
            fetchExpectedWishlistData(user.email);
        }
    }, [user]);

    const fetchExpectedWishlistData = (email) => {
        fetch(`https://blog-portal-server-pink.vercel.app/wishlists/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setExpectedWishlistData(data);
            })
            .catch((error) => {
                console.error("Error fetching expected wishlist data:", error);
            });
    };

    const handleWishlist = (id) => {
        const checkDuplicate = expectedWishlistData.find((data) => data.id === id);

        if (!checkDuplicate) {
            const newWishlist = {
                id: _id,
                whoAddedWishlist: user.email,
                title,
                short_description,
                long_description: detail_description,
                category,
                image: image_url,
            };

            fetch("https://blog-portal-server-pink.vercel.app/wishlists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newWishlist),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success("The blog added to your Wishlist");
                        // After adding the item to the wishlist, fetch updated wishlist data
                        fetchExpectedWishlistData(user.email);
                    }
                })
                .catch((error) => {
                    console.error("Error adding blog to wishlist:", error);
                });
        } else {
            Swal.fire({
                icon: "error",
                title: "Not Again",
                text: "This blog already added to your Wishlist",
            });
        }
    };

    return (
        <motion.div className="card bg-base-100 shadow-2xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 } }}
        >
            <figure><img className="w-full h-[248px] object-cover" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <span className="w-[28%] text-center bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">{category}</span>
                <p>{short_description}</p>
                <div className="card-actions justify-end mt-2 gap-2">
                    <Link to={`/recent_blogs/${_id}`}>
                        <button className="btn bg-slate-700 hover:bg-white hover:text-black text-white">View Details</button>
                    </Link>
                    <button onClick={() => handleWishlist(_id)} className="btn bg-green-600 hover:bg-white hover:text-green-600 text-white">Wishlist</button>
                </div>
            </div>
        </motion.div>
    );
};

export default RecentBlogs;