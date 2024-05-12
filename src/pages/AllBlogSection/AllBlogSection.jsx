import { useLoaderData } from "react-router-dom";
import AllBlogs from "../AllBlogs/AllBlogs";
import { useEffect, useState } from "react";

const AllBlogSection = () => {
    const allData = useLoaderData();
    const [allBlogs, setAllBlogs] = useState([]);
    const [search, setSearch] = useState('');
    console.log(search);

    useEffect(() => {
        setAllBlogs(allData)
    }, [allData])

    const handleCategoryFilter = filter => {
        if (filter === 'all') {
            setAllBlogs(allData);
            console.log(allBlogs);
        }
        else if (filter === 'history') {
            const categoryHistory = allData.filter(data => data.category === 'history');
            setAllBlogs(categoryHistory);
            console.log(allBlogs);
        }
        else if (filter === 'politics') {
            const categoryPolitics = allData.filter(data => data.category === 'politics');
            setAllBlogs(categoryPolitics);
            console.log(allBlogs);
        }
        else if (filter === 'economics') {
            const categoryEconomics = allData.filter(data => data.category === 'economics');
            setAllBlogs(categoryEconomics);
            console.log(allBlogs);
        }
    }

    return (
        <div>
            <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto flex justify-end items-center gap-8 md:gap-16 lg:gap-72">
                <div className="w-[50%] lg:w-1/3">
                    <label className="input input-bordered flex items-center gap-2 mt-8 w-full">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow w-full" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 font-bold text-red-500 border border-red-600">Category</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleCategoryFilter('all')}><a>All</a></li>
                        <li onClick={() => handleCategoryFilter('history')}><a>History</a></li>
                        <li onClick={() => handleCategoryFilter('politics')}><a>Politics</a></li>
                        <li onClick={() => handleCategoryFilter('economics')}><a>Economics</a></li>
                    </ul>
                </div>
            </div>

            <div className="w-[90%] md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
                {
                    allBlogs.filter((item) => {
                        return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
                    }).map(allBlogs => <AllBlogs
                        key={allBlogs._id}
                        allBlogs={allBlogs}
                    ></AllBlogs>)
                }
            </div>
        </div>
    );
};

export default AllBlogSection;
