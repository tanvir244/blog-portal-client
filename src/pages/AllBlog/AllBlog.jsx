import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";

const AllBlog = () => {
    const { user } = useAuth();
    const blogDetails = useLoaderData();
    const { _id, title, short_description, long_description, category, image } = blogDetails;
    console.log(blogDetails);
    console.log(user);
    const [commentValue, setCommentValue] = useState([]);
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/all_comments/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllComments(data);
            })
    }, [_id])

    const handleComment = () => {
        console.log(commentValue);

        // the object I want to send to the database 
        const comment = { commentId: _id, email: user.email, photo: user.photoURL, name: user.displayName, comment: commentValue };
        console.log(comment);

        // sending to database 
        if (commentValue.length > 0) {
            fetch('http://localhost:5000/all_comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Add the new comment to the existing comments list
                    setAllComments([...allComments, comment]);
                    // Reset the input field after successful submission
                    setCommentValue("");
                })
        }
    }

    return (
        <div className="w-[90%] max-w-6xl mx-auto">
            <div className="bg-[#e5e6e6] mt-8 mb-20 p-6 md:p-8 rounded-lg">
                <div className="mb-8">
                    <h2 className=" md:w-[70%] lg:w-[60%] text-4xl font-bold mb-4">{title}</h2>
                    <p className="mb-6">{short_description}</p>
                    <span className="bg-red-600 text-white p-2 rounded-lg text-sm">{category}</span>
                </div>
                <img className="w-full h-[380px] md:h-[580px] object-cover" src={image} alt="" />
                <div className="space-y-4 mt-8">
                    <p>{long_description}</p>
                </div>
            </div>

            <div className="flex justify-end">
                {user && user.email === blogDetails.email ? (
                    <Link to={`/update_blog/${_id}`} className="btn bg-teal-500 text-white">Update your blog</Link>
                ) : (
                    <></>
                )}
            </div>

            {/* comment section  */}
            <div className="mb-24">
                <h2 className="mb-8 font-bold text-lg">All Comments</h2>
                <div className="flex gap-4 mb-2">
                    <img className="w-16 h-16 rounded-full object-cover" src={user?.photoURL || "https://i.ibb.co/TmsrwQs/user.png"} alt="" />

                    {user ? (
                        user?.email === blogDetails.email ? (
                            <p className="flex items-center">You cannot comment on your own blog</p>
                        ) : (
                            <input
                                className="text-black p-4 border-b-2 border-b-black w-full"
                                type="text"
                                name="comment"
                                placeholder="Comment here"
                                value={commentValue}
                                onChange={(e) => setCommentValue(e.target.value)}
                            />
                        )
                    ) : (
                        <p className="flex items-center">Login first to comment</p>
                    )}

                </div>
                <div className="flex justify-end mb-2">
                    <button onClick={handleComment} className="btn w-28 bg-black text-white rounded-lg">
                        Submit
                    </button>
                </div>
                <div className="space-y-8">
                    {
                        allComments.map(comments => <Comments
                            key={comments._id}
                            comments={comments}
                        ></Comments>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlog;