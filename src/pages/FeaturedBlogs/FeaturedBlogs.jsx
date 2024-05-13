import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedBlogItems from "../FeaturedBlogItems/FeaturedBlogItems";

const FeaturedBlogs = () => {
    const [allAddedData, setAllAddedData] = useState([]);
    const [longestDescriptions, setLongestDescriptions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/add_blog')
            .then(res => res.json())
            .then(data => {
                setAllAddedData(data);
                const sortedData = [...data].sort((a, b) => b.long_description.length - a.long_description.length);
                setLongestDescriptions(sortedData);
            })
    }, []);

    console.log(allAddedData);
    console.log(longestDescriptions);

    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-black mb-8 text-center">Top Ten Featured</h2>
            <div className="py-4 max-w-6xl mx-auto">
                <div className="w-[90%] mx-auto">
                    <div className="overflow-x-auto border">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-base md:text-lg font-semibold">
                                    <th>No.</th>
                                    <th>Blog Owner</th>
                                    <th>Blog Title</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    longestDescriptions.slice(0, 10).map((longestDescription, index) => <FeaturedBlogItems
                                        key={longestDescription._id}
                                        longestDescription={longestDescription}
                                        index={index + 1}
                                    ></FeaturedBlogItems>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlogs;