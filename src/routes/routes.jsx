import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import RecentBlogDetail from "../pages/Home/RecentBlogDetail/RecentBlogDetail";
import AddBlog from "../pages/AddBlog/AddBlog";


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
        }
      ]
    },
  ]);

export default routes;