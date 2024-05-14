import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Writers from "../BestWriters/Writers";
import Newslater from "../Newslater/Newslater";
import PopularBlogs from "../PopularBlogs/PopularBlogs";
import RecentBlogSection from "../RecentBlogSection/RecentBlogSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-[90%] max-w-6xl mx-auto">
                <RecentBlogSection></RecentBlogSection>
                <Writers></Writers>
                <PopularBlogs></PopularBlogs>
                <Newslater></Newslater>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;