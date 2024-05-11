
const Comments = ({ comments }) => {
    const { photo, name, comment } = comments;

    return (
        <div className="mb-2">
            <div className="flex items-center gap-4 font-bold">
                <img className="w-16 h-16 rounded-full" src={photo} alt="" />
                    <h5 className="text-lg font-bold">{name}</h5>
            </div>
            <p className="ml-20">{comment}</p>
        </div>
    );
};

export default Comments;