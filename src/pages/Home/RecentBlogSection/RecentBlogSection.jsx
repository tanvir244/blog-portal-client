import { useEffect, useState } from "react";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

const RecentBlogSection = () => {
    const [recentBlogs, setRecentBlogs] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/recent_blogs')
        .then(res => res.json())
        .then(data => {
            setRecentBlogs(data);
            setLoading(false);
        })
    }, []);

    if(loading){
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    return (
        <div className="my-16">
            <h2 className="mb-12 text-4xl font-bold text-black text-center">Recent Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    recentBlogs.map(recentBlog => <RecentBlogs
                    key={recentBlog._id}
                    recentBlog={recentBlog}
                    ></RecentBlogs>)
                }
            </div>
        </div>
    );
};

export default RecentBlogSection;