import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import carousel1 from "../../images/2nd_birthday_cake.jpg"
import carousel2 from "../../images/peppermint_tart_cupcake.jpg"
import carousel3 from "../../images/Cupcake_with_pink_marshmello.jpg"
import carousel4 from "../../images/smores_cupcake.jpg"

const Carousel = () => {
  return (
    <div className='border-chocolate border-8 rounded-xl border-opacity-10 p-1'  >
      <Swiper
        spaceBetween={3}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000, // 3-second interval
          disableOnInteraction: false,
        }}
        speed = {2000}
        modules={[Autoplay]}
        className='my-swiper rounded-lg shadow-lg overflow-hidden'
        style={{height:"35vw"}}
      >
        <SwiperSlide className="flex items-center justify-center bg-gray-200">
          <img src={carousel1} alt="Image 1" className="w-full h-full object-cover"  />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-200">
          <img src={carousel2} alt="Image 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-200">
          <img src={carousel3} alt="Image 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-200">
          <img src={carousel4} alt="Image 4" className="w-full h-full object-cover"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;