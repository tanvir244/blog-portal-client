import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyInfo = () => {
    const {user} = useAuth();
    const [myAddBlogs, setMyAddBlogs] = useState([]);
    const [myWishList, setMyWishList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://blog-portal-server-pink.vercel.app/my_added_blogs/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyAddBlogs(data);
            setLoading(false);
        })

        fetch(`https://blog-portal-server-pink.vercel.app/my_wishlist/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyWishList(data);
            setLoading(false);
        })
    })

    console.log(myAddBlogs);
    console.log(myWishList);

    if(loading){
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    console.log('my added blogs', myAddBlogs);

    return (
        <div className="w-[92%] max-w-6xl mx-auto my-12">
            <div>
                {/* my added blogs */}
                <div>
                    <h2 className="text-5xl font-bold text-center">Blogs I added</h2>
                    <div className="overflow-x-auto mt-8">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myAddBlogs.map(item => <tr key={item._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-bold">{item.title}</td>
                                        <th>
                                            <Link to={`/added_blog/${item._id}`}>
                                                <button className="btn bg-gray-600 text-white">Details</button>
                                            </Link>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* my wishlisted blogs */}
                <div className="mt-12 mb-16">
                    <h2 className="text-5xl font-bold text-center">My Wish listed</h2>
                    <div className="overflow-x-auto mt-8">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myWishList.map(item => <tr key={item.id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td className="font-bold text-base">{item.authorName}</td> */}
                                        <td className="font-bold">{item.title}</td>
                                        <th>
                                            <Link to={`/added_blog/${item.id}`}>
                                                <button className="btn bg-gray-600 text-white">Details</button>
                                            </Link>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyInfo;