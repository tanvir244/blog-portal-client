import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const FeaturedBlogs = () => {
    const [allAddedData, setAllAddedData] = useState([]);
    const [longestDescriptions, setLongestDescriptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://blog-portal-server-pink.vercel.app/add_blog')
            .then(res => res.json())
            .then(data => {
                setAllAddedData(data);
                const sortedData = [...data].sort((a, b) => b.long_description.length - a.long_description.length);
                const topTop = sortedData.slice(0, 10);
                setLongestDescriptions(topTop);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>;
    }

    // Define columns for DataTable
    const columns = [
        {
            name: "Serial No.",
            cell: (row, index) => <span style={{fontSize: "16px", fontWeight: "bold"}}>{index + 1}</span>,
            width: "110px"
        },
        {
            name: "Author Profile",
            cell: row => <img src={row.author} alt={row.name} style={{ width: "120px", height: "120px", borderRadius: 10, objectFit: 'cover' }} />,
            width: "210px"
        },
        {
            name: "Blog Owner",
            cell: row => <div style={{fontWeight: "bold", fontSize: "16px"}}>{row.authorName}</div>,
            width: "230px"
        },
        {
            name: "Blog Title",
            selector: row => <div style={{fontSize: "14px"}}>{row.title}</div>
        }
    ];

    const customStyles = {
        rows: {
            style: {
                padding: "16px", // Set padding for rows
            }
        }
    };

    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-black mb-8 text-center">Top Ten Featured</h2>
            <div className="py-4 max-w-6xl mx-auto">
                <div className="w-[90%] mx-auto">
                    <DataTable
                        columns={columns}
                        data={longestDescriptions}
                        customStyles={customStyles}
                    />
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlogs;
