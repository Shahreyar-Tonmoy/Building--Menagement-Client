import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import slider1 from '../../../assets/Slider image/slider1.jpg';
import slider2 from '../../../assets/Slider image/slider2.jpg';
import slider3 from '../../../assets/Slider image/slider3.jpg';
import slider4 from '../../../assets/Slider image/slider4.jpg';
import slider5 from '../../../assets/Slider image/slider5.jpg';
import slider6 from '../../../assets/Slider image/slider6.jpg';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img className=' w-full h-[89vh] rounded-xl' src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' w-full h-[89vh] rounded-xl' src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' w-full h-[89vh] rounded-xl' src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' w-full h-[89vh] rounded-xl' src={slider4} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' w-full h-[89vh] rounded-xl' src={slider5} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' w-full h-[89vh] rounded-xl' src={slider6} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
