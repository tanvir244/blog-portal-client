import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import RecentBlogDetail from "../pages/Home/RecentBlogDetail/RecentBlogDetail";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogSection from "../pages/AllBlogSection/AllBlogSection";
// import AllBlogs from "../pages/AllBlogs/AllBlogs";
import AllBlog from "../pages/AllBlog/AllBlog";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
            element: <AddBlog></AddBlog>
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
        }
      ]
    },
  ]);

export default routes;