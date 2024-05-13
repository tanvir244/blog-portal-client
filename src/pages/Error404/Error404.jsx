import { Link } from 'react-router-dom';
import error404 from '../../../src/assets/image/404.jpg'

const Error404 = () => {
    return (
        <div className="w-full h-full">
            <img className='w-full h-full object-cover' src={error404} alt="" />
            <div className='text-center'>
                <Link to="/" className='btn w-56 mt-8 mx-auto bg-black text-white'>Go to Home</Link>
            </div>
        </div>
    );
};

export default Error404;