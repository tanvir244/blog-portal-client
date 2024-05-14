import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-primary-content">
            <aside>
                <div className="text-center pt-8 pb-4">
                    <a href="/" className="text-white text-4xl md:text-5xl font-bold">Blog <span className="text-red-600">Portal</span></a>
                </div>
                <p className="font-bold">
                    Blog Portal Media Ltd. <br />Providing reliable info since 1946
                </p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
            <div className="space-y-4">
                            <ul className="flex gap-6 justify-center">
                                <li className="text-4xl"><a href="https://www.linkedin.com/in/hellotanvir4/"><RxLinkedinLogo /></a></li>
                                <li className="text-4xl"><a href="https://github.com/tanvir244"><FaGithub /></a></li>
                                <li className="text-4xl"><a href="https://www.facebook.com/tanvirrahman.saim.7"><FaFacebook /></a></li>
                                <li className="text-4xl"><a href="https://twitter.com/Tanvir339077"><FaXTwitter /></a></li>
                            </ul>
                        </div>
            </nav>
        </footer>
    );
};

export default Footer;