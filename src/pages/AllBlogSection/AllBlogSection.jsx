import { useLoaderData } from "react-router-dom";
import AllBlogs from "../AllBlogs/AllBlogs";

const AllBlogSection = () => {
    const allBlogs = useLoaderData();

    return (
        <div className="w-[90%] md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
            {
                allBlogs.map(allBlogs => <AllBlogs
                    key={allBlogs._id}
                    allBlogs={allBlogs}
                ></AllBlogs>)
            }
        </div>
    );
};

export default AllBlogSection;