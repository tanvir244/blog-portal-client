import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AllBlogs = ({ allBlog }) => {
  const { user } = useAuth();
  const [expectedWishlistData, setExpectedWishlistData] = useState([]);
  const { _id, title, short_description, long_description, category, image } = allBlog;

  useEffect(() => {
    if (user && user.email) {
      fetchExpectedWishlistData(user.email);
    }
  }, [user]);

  const fetchExpectedWishlistData = (email) => {
    fetch(`https://blog-portal-server-pink.vercel.app/wishlists/${email}`, {credentials: 'include'})
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
        long_description,
        category,
        image,
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
    <div className="card card-compact bg-base-100 shadow-2xl">
      <figure>
        <img
          className="w-full h-[192px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base font-bold">{title}</h2>
        <span className="w-[30%] text-center bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">
          {category}
        </span>
        {short_description.length > 70 ? (
          <p>
            {short_description.slice(0, 70)}{" "}
            <span className="text-red-500"> see more.....</span>
          </p>
        ) : (
          <p>{short_description}</p>
        )}
        <div className="card-actions justify-end mt-2 gap-1">
          <Link to={`/added_blog/${_id}`}>
            <button className="btn bg-slate-700 hover:bg-white hover:text-black text-white">
              View Details
            </button>
          </Link>
          <button
            onClick={() => handleWishlist(_id)}
            className="btn bg-green-600 hover:bg-white hover:text-green-600 text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
