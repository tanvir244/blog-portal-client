// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <div>
                    <SwiperSlide>
                        <div className='relative w-full h-[540px]'>
                            <img className='w-full h-full object-cover' src="https://i.ibb.co/BgCMgny/news-paper-3.jpg" alt="" />
                            <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full p-12 md:p-24'>
                                <h2 className='w-[90%] md:w-[450px] text-teal-500 text-4xl md:text-6xl font-bold'>Explore What is Happening Around the Globe!</h2>
                                <p className='w-full md:w-[85%] lg:w-[60%] mt-6 text-white'>Embark on a journey of discovery with our dynamic news blog, where every click unveils the latest in global events, politics, technology, and culture. Our team of seasoned journalists brings you comprehensive coverage, offering context, analysis, and diverse perspectives to keep you informed and engaged. our platform is your gateway to staying ahead in an ever-evolving world.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-[540px]'>
                            <img className='w-full h-full object-cover' src="https://i.ibb.co/SNbc7Jf/blog-banner-1.jpg" alt="" />
                            <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full p-12 md:p-24'>
                                <h2 className='w-[90%] md:w-[450px] text-teal-500 text-4xl md:text-6xl font-bold'>Stay Informed with Our Latest Updates!</h2>
                                <p className='w-full md:w-[85%] lg:w-[60%] mt-6 text-white'>Step into a world of insight and exploration with our meticulously curated news blog, your passport to the pulse of our planet. From the corridors of power to the frontiers of innovation, we deliver the stories that shape our collective narrative. With a commitment to accuracy, integrity, and diversity of thought, we invite you to join us on a journey of discovery, dialogue, and enlightenment.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-[540px]'>
                            <img className='w-full h-full object-cover' src="https://i.ibb.co/LJLfRwS/news-paper-9.jpg" alt="" />
                            <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full p-12 md:p-24'>
                                <h2 className='w-[90%] md:w-[450px] text-teal-500 text-4xl md:text-6xl font-bold'>Dive into the Stories That Matter Most!</h2>
                                <p className='w-full md:w-[85%] lg:w-[60%] mt-6 text-white'>Welcome to our digital news oasis, where information flows freely and curiosity reigns supreme. Immerse yourself in the art of storytelling with our in-depth coverage, crafted by a team of dedicated journalists and thought leaders. With a blend of investigative reporting, thoughtful analysis, and captivating narratives, our platform is your gateway to understanding the issues that matter most.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-[540px]'>
                            <img className='w-full h-full object-cover' src="https://i.ibb.co/W36nkJt/blog-banner-3.jpg" alt="" />
                            <div className='absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full p-12 md:p-24'>
                                <h2 className='w-[90%] md:w-[450px] text-teal-500 text-4xl md:text-6xl font-bold'>Let us share our intension to platform</h2>
                                <p className='w-full md:w-[85%] lg:w-[60%] mt-6 text-white'>Join us on a quest for knowledge and understanding, as we navigate the ever-changing currents of global news and affairs.  Whether you are seeking the latest updates or timeless narratives, our diverse range of content offers something for everyone. From thought-provoking opinion pieces to immersive multimedia experiences, we invite you to explore, engage, and expand your horizons with us.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;