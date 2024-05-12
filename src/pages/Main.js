//swiper
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

const Main = () => {
  return (
    <div className="Main">
      <Swiper
      direction={'vertical'}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="mySwiper Main"
     >
      <SwiperSlide><img src={process.env.PUBLIC_URL + "./images/Main/main01.jpg"} alt="main01" /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "./images/Main/main02.jpg"} alt="main02" /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "./images/Main/main03.jpg"} alt="main03" /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "./images/Main/main04.jpg"} alt="main04" /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + "./images/Main/main05.jpg"} alt="main05" /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Main