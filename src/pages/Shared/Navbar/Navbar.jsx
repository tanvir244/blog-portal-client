import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/add_blog">Add Blog</NavLink></li>
        <li><NavLink to="/all_blogs">All Blogs</NavLink></li>
        <li><NavLink to="/featured_blogs">Featured Blogs</NavLink></li>
        <li><NavLink to="/wishlist">Wishlist</NavLink></li>
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
                <div className="navbar-end gap-4">
                    <a className="btn bg-black text-white hover:bg-white hover:text-black font-semibold">Sign In</a>
                    <a className="btn bg-black text-white hover:bg-white hover:text-black font-semibold">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;