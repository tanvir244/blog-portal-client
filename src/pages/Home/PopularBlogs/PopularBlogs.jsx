import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularBlogs = () => {
    const [allAddedData, setAllAddedData] = useState([]);
    const [longestDescriptions, setLongestDescriptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://blog-portal-server-pink.vercel.app/add_blog')
            .then(res => res.json())
            .then(data => {
                setAllAddedData(data);
                const sortedData = [...data].sort((a, b) => b.long_description.length - a.long_description.length);
                setLongestDescriptions(sortedData);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    console.log(allAddedData);
    console.log(longestDescriptions);

    return (
        <div className="my-16">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Blogs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    longestDescriptions.slice(0, 6).map(longestDescription => (
                        <div key={longestDescription._id} className="flex flex-col md:flex-row gap-6 p-4 border shadow-2xl h-full rounded-lg">
                            <div className="w-full md:w-[45%] h-[218px]">
                                <img className="w-full h-full object-cover rounded-lg" src={longestDescription.image} alt="" />
                            </div>
                            <div className="w-full md:w-[55%] flex flex-col">
                                <h2 className="text-xl font-bold mb-4">{longestDescription.title}</h2>
                                <div className="flex-grow">
                                    {
                                        longestDescription.short_description.length > 90
                                            ? <p className="text-sm">{longestDescription.short_description.slice(0, 90)} <span className="text-red-500"> See more....</span></p>
                                            : <p>{longestDescription}</p>
                                    }
                                </div>
                                <Link to={`/added_blog/${longestDescription._id}`}>
                                    <div className="flex justify-end">
                                        <button className="btn bg-gray-600 text-white">View Details</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularBlogs;