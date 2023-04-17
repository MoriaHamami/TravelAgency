// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function HomeSwiper() {

    return (
        <section className="home-swiper">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                navigation
                // pagination={{ clickable: true }}
            >
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <span>explore, discover, travel</span>
                        <h3>travel around the world</h3>
                        <a href="/package" className="btn">discover more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-2'>
                    <div className="slide">
                        <span>explore, discover, travel</span>
                        <h3>discover the new places</h3>
                        <a href="/package" className="btn">discover more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-3'>
                    <div className="slide">
                        <span>explore, discover, travel</span>
                        <h3>make your tour worthwhile</h3>
                        <a href="/package" className="btn">discover more</a>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section >
    )
}

export default HomeSwiper