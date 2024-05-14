import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.warning('User Logged out');
            })
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add_blog">Add Blog</NavLink></li>
        <li><NavLink to="/all_blogs">All Blogs</NavLink></li>
        <li><NavLink to="/featured_blogs">Featured Blogs</NavLink></li>
        <li><NavLink to="/wishlist/user">Wishlist</NavLink></li>
    </>



    return (
        <div className="bg-base-300">
            <div className="text-center pt-8 pb-4">
                <a href="/" className="text-black text-4xl md:text-5xl font-bold">Blog <span className="text-red-600">Portal</span></a>
            </div>
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* <a className="text-black text-2xl font-bold">Blog <span className="text-red-600">Portal</span></a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {user ? (
                        <div className="w-12 h-12">
                            <img className="w-full h-full object-cover rounded-full cursor-pointer mb-2" src={user?.photoURL || "https://i.ibb.co/TmsrwQs/user.png"} alt="" />
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link to="/sign_in" className="btn bg-black text-white hover:bg-white hover:text-black font-semibold">Sign In</Link>
                            <Link to="/sign_up" className="btn bg-black text-white hover:bg-white hover:text-black font-semibold">Sign Up</Link>
                        </div>
                    )
                    }
                    {user && (
                        <button onClick={handleLogout} className="btn bg-black text-white hover:bg-white hover:text-black font-semibold">Sign Out</button>
                    )}
                    {/* <Link to="/sign_in" className="btn bg-black text-white hover:bg-white hover:text-black font-semibold">Sign In</Link>
                    <Link to="/sign_up" className="btn bg-black text-white hover:bg-white hover:text-black font-semibold">Sign Up</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;