import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiSolidQuoteLeft } from 'react-icons/bi';

const Writers = () => {
    const [authors, setAuthors] = useState([]);

    // swipper slider related
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    // fetch data from database
    useEffect(() => {
        fetch('https://blog-portal-server-pink.vercel.app/authors')
            .then(res => res.json())
            .then(data => setAuthors(data))
    }, [])

    return (
        <div className='my-20'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold text-center mb-6'>Writers of The Month</h2>
            </div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            <div>
                {
                    authors.map(author => (
                        <SwiperSlide key={author._id}>
                            <div className='bg-[#a5d4d1] h-[480px] flex flex-col lg:flex-row items-center gap-4 lg:gap-16 px-4 py-8 md:p-12 lg:p-20 rounded-lg'>
                                <img className='w-[120px] md:w-[180px] h-[120px] md:h-[180px] lg:w-[320px] lg:h-[320px] object-cover rounded-full' src={author.profile}></img>
                                <div>
                                    <h2 className='text-xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center lg:text-left'>{author.authorName}</h2>
                                    <p className='flex gap-4'><span className='text-2xl'><BiSolidQuoteLeft /></span>
                                        <span className='italic text-sm md:text-base lg:text-lg'>{author.authorBio}</span></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </div >

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper >
        </div>
    );
};

export default Writers;