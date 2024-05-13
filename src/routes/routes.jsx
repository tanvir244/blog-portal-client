import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import RecentBlogDetail from "../pages/Home/RecentBlogDetail/RecentBlogDetail";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogSection from "../pages/AllBlogSection/AllBlogSection";
import AllBlog from "../pages/AllBlog/AllBlog";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
import Wishlist from "../pages/Wishlist/Wishlist";
import PrivateRoute from "./PrivateRoute";
import Error404 from "../pages/Error404/Error404";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error404></Error404>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/recent_blogs/:id',
            element: <RecentBlogDetail></RecentBlogDetail>,
            loader: ({params}) => fetch(`http://localhost:5000/recent_blogs/${params.id}`)
        },
        {
            path: '/add_blog',
            element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path: '/all_blogs',
          element: <AllBlogSection></AllBlogSection>,
          loader: () => fetch('http://localhost:5000/add_blog')
        },
        {
          path: '/added_blog/:id',
          element: <AllBlog></AllBlog>,
          loader: ({params}) => fetch(`http://localhost:5000/add_blog/${params.id}`)
        },
        {
          path: '/sign_up',
          element: <SignUp></SignUp>
        },
        {
          path: '/sign_in',
          element: <SignIn></SignIn>
        },
        {
          path: '/update_blog/:id',
          element: <UpdateBlog></UpdateBlog>,
          loader: ({params}) => fetch(`http://localhost:5000/add_blog/${params.id}`)
        },
        {
          path: '/featured_blogs',
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path: '/wishlist/:email',
          element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/wishlists/${params.email}`)
        }
      ]
    },
  ]);

export default routes;
