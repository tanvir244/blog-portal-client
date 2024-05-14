import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Wishlist = () => {
    const { user } = useAuth();
    const [wishlistItems, setWishListItems] = useState([]);
    const { _id, title, short_description, category, image } = wishlistItems;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/wishlists/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setWishListItems(data);
            setLoading(false);
        })
    }, [user.email]);

    if(loading){
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    const handleDelete = (email, id) => {

        Swal.fire({
            title: "Are you sure you want to Remove?",
            text: "This blog will permanently remove",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#00000",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // now find the specific data and delete from the database
                fetch(`http://localhost:5000/wishlists/${email}/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your blog has been deleted.",
                                icon: "success"
                            });
                            const remaining = wishlistItems.filter(itm => itm._id !== id);
                            setWishListItems(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-black mb-8 text-center">My Wish List</h2>
            <div className="w-[90%] md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    wishlistItems.map((wishlistItem) => (
                        <div key={wishlistItem.id} className="card card-compact bg-base-100 shadow-2xl">
                            <figure>
                                <img
                                    className="w-full h-[192px] object-cover"
                                    src={wishlistItem.image}
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-base font-bold">{wishlistItem.title}</h2>
                                <span className="w-[30%] text-center bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                                    {wishlistItem.category}
                                </span>
                                {wishlistItem.short_description.length > 70 ? (
                                    <p>
                                        {wishlistItem.short_description.slice(0, 70)}{" "}
                                        <span className="text-red-500"> see more.....</span>
                                    </p>
                                ) : (
                                    <p>{wishlistItem.short_description}</p>
                                )}
                                <div className="card-actions justify-end mt-2 gap-1">
                                    <Link to={`/added_blog/${wishlistItem.id}`}>
                                        <button className="btn bg-slate-700 hover:bg-white hover:text-black text-white">
                                            View Details
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(user.email, wishlistItem._id)}
                                        className="btn bg-red-600 hover:bg-white hover:text-red-600 text-white"
                                    >Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Wishlist;