// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div id='carousel'>
      <div className='most-watched'>
        <div className='title-side-line'></div>
        <h3>Most Watched Movies</h3>
        <div className='title-side-line'></div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        modules={[ Autoplay, Pagination, Navigation ]}
        className="mySwiper"
        breakpoints={{
          1199: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <img src="images/slider/fellowship.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slider/batman.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slider/godfather-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slider/godfather.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
