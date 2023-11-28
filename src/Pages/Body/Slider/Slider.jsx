
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'



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

            {/* 1 */}

        <SwiperSlide><div>
          <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(https://i.ibb.co/kQdsM8n/slider1.jpg)` }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
              <div className="w-[550px] -ml-96">
                <h1 className="mb-5 -mt-12 text-5xl font-bold">Welcome to Smart Living</h1>
                <p className="mb-5">This title conveys a sense of modernity and technological integration, suggesting that the home page is a central hub for managing various aspects of smart living.</p>
                
              </div>
            </div>
          </div>
          

        </div></SwiperSlide>

        {/* 2 */}


        <SwiperSlide>
        <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(https://i.ibb.co/NTqK8pX/slider2.jpg)` }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
              <div className="w-[550px] -ml-96">
                <h1 className="mb-5 -mt-12 text-5xl font-bold">Your Gateway to Comfort and Efficiency</h1>
                <p className="mb-5">This title emphasizes the ease and efficiency of managing a home through the platform, promoting the idea that visitors can achieve a comfortable lifestyle with minimal effort.</p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

          {/* 3 */}

        <SwiperSlide>
        <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(https://i.ibb.co/VmwfHZz/slider3.jpg)` }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
              <div className="w-[550px] -ml-96">
                <h1 className="mb-5 -mt-12 text-5xl font-bold">Explore Intelligent Living</h1>
                <p className="mb-5">This title invites users to explore the possibilities of intelligent living, implying that the home page offers tools and features to customize and control various aspects of home management.</p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

          {/* 4 */}
      
        <SwiperSlide>
        <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(https://i.ibb.co/nj5Fhmn/slider4.jpg)` }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
              <div className="w-[550px] -ml-96">
                <h1 className="mb-5 -mt-12 text-5xl font-bold">Sustainable Living Starts Here</h1>
                <p className="mb-5">This title highlights a commitment to sustainability and suggests that the home page provides tools for managing a residence with an environmentally conscious approach.</p>
                
              </div>
            </div>
          </div>
          </SwiperSlide>

          {/* 5 */}

        <SwiperSlide>
        <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(https://i.ibb.co/PYFCcJQ/slider5.jpg)` }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
              <div className="w-[550px] -ml-96">
                <h1 className="mb-5 -mt-12 text-5xl font-bold">Streamlined Living, Enhanced Comfort</h1>
                <p className="mb-5">This title positions the home page as a central command center for managing all aspects of home life, promising a streamlined experience and enhanced comfort for users.</p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 6 */}

        <SwiperSlide>
        <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(https://i.ibb.co/Yd9GdC2/slider6.jpg)` }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content">
              <div className="w-[550px] -ml-96">
                <h1 className="mb-5 -mt-12 text-5xl font-bold"> Elevate Your Home Experience with Intelligent Management</h1>
                <p className="mb-5">This title suggests that the home page offers a seamless experience, emphasizing the integration of intelligent management features that enhance and elevate the overall living experience.</p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
