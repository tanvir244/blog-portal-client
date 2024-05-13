import { Link } from "react-router-dom";

const FeaturedBlogItems = ({ longestDescription, index }) => {
    const { _id, author, authorName, title } = longestDescription;

    return (
        <tr>
            <td>{index < 10 ? '0' + index : index}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={author} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className="">{authorName}</div>
                </div>
            </td>
            <td>
                <p className="font-bold md:text-base">{title}</p>
            </td>
            <th>
                <Link to={`/added_blog/${_id}`}>
                    <button className="btn px-6 bg-teal-700 text-white hover:bg-white hover:text-black">View</button>
                </Link>
            </th>
        </tr>
    );
};

export default FeaturedBlogItems;