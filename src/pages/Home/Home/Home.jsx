import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import RecentBlogSection from "../RecentBlogSection/RecentBlogSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-[90%] max-w-6xl mx-auto">
                <RecentBlogSection></RecentBlogSection>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;