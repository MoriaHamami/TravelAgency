// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import pic1 from "../imgs/pic-1.png"
import pic2 from "../imgs/pic-2.png"
import pic3 from "../imgs/pic-3.png"
import pic4 from "../imgs/pic-4.png"
import pic5 from "../imgs/pic-5.png"
import pic6 from "../imgs/pic-6.png"
import Image from 'next/image'

function Reviews() {
    return (
        <section className="reviews">
            <Swiper
                loop
                autoHeight
                grabCursor
                spaceBetween={20}
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}

            >
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ratione error iusto, nisi laudantium enim. Cupiditate ea perspiciatis, quod ratione rem, ipsum, cumque ipsam voluptas nisi tenetur beatae sint minus.</p>
                        <h3>john deo</h3>
                        <span>traveler</span>
                        <div className="img-container">
                            <Image fill src={pic1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugit libero, temporibus incidunt eveniet quisquam cumque. Dicta neque, est quibusdam velit ducimus incidunt, voluptatem eius qui nisi tempore fugiat explicabo voluptates delectus beatae? Quo maxime nesciunt vel voluptates expedita assumenda.</p>
                        <h3>gil don</h3>
                        <span>explorer</span>
                        <div className="img-container">
                            <Image fill src={pic2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugit libero, temporibus incidunt eveniet quisquam cumque. Dicta neque, est quibusdam velit ducimus incidunt, voluptatem eius qui nisi tempore fugiat explicabo voluptates delectus beatae? Quo maxime nesciunt vel voluptates expedita assumenda.</p>
                        <h3>blake jin</h3>
                        <span>traveler</span>
                        <div className="img-container">
                            <Image fill src={pic3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod officia neque aliquam amet accusamus? At?</p>
                        <h3>bar hem</h3>
                        <span>explorer</span>
                        <div className="img-container">
                            <Image fill src={pic4} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque velit dolorum pariatur esse deleniti ea voluptatum architecto reiciendis facilis soluta suscipit nam, voluptates deserunt, dolore nulla? Architecto ab repellat at quisquam debitis, quas officia.</p>
                        <h3>george yellow</h3>
                        <span>traveler</span>
                        <div className="img-container">
                            <Image fill src={pic5} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-1'>
                    <div className="slide">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quaerat provident sed nam odit molestias modi culpa laborum ipsum recusandae?</p>
                        <h3>jim grand</h3>
                        <span>explorer</span>
                        <div className="img-container">
                            <Image fill src={pic6} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section >
    )
}

export default Reviews