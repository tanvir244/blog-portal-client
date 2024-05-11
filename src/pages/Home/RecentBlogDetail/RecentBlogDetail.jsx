import { useLoaderData } from "react-router-dom";

const RecentBlogDetail = () => {
    const recentBlog = useLoaderData();
    const { title, short_description, detail_description, category, image_url } = recentBlog;
    console.log(recentBlog);

    return (
        <div className="w-[90%] max-w-6xl mx-auto">
            <div className="bg-[#e5e6e6] mt-8 mb-20 p-6 md:p-8 rounded-lg">
                <div className="mb-8">
                    <h2 className=" md:w-[70%] lg:w-[60%] text-4xl font-bold mb-4">{title}</h2>
                    <span className="bg-red-600 text-white p-2 rounded-lg text-sm">{category}</span>
                </div>
                <img className="w-full h-[380px] md:h-[580px] object-cover" src={image_url} alt="" />
                <div className="space-y-4 mt-8">
                    <p>{short_description}</p>
                    <p>{detail_description}</p>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogDetail;